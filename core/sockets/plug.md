# plug

Execute a prepared [LivePlugs](/generated/base-types/LivePlugs) bundle on behalf of the [Socket](/core/sockets).

## Parameters

- `$plugs`: The bundle of [Plugs](/generated/base-types/Plugs) that provide the conditional and execution data.
- `$signer`: optional: The address that granted execution allowance.
- `gas`: optional: The address that granted execution allowance.

## Returns

- `$results`: An array of transaction responses from each [Plug](/generated/base-types/Plug) within the bundle.

## Onchain Implementation

In each [Socket](/core/sockets) there are two key mechanisms to execute a [LivePlugs](/generated/base-types/LivePlugs) bundle. Notably, `plug` has overloaded meaning there are two versions of the interfaces for the same underlying function.

- `External execution`: Forwarded calls from a [Router](/core/routers).
- `Local execution`: Direct calls made by permissioned [Socket](/core/sockets) signers without a [Router](/core/routers).

### External Execution

The most commonly used method of `plug` is through a [Router](/core/routers) that was executed by a [Solver](/core/solvers). This is a call that the `signer` does not execute themselves enabling the key functionality of delegated, automated, and scheduled transactions.

```solidity
function plug(
  PlugTypesLib.Plugs calldata $plugs,
  address $signer,
  uint256 $gas
)
  external
  payable
  virtual
  enforceRouter
  enforceSigner($signer)
  nonReentrant
  returns (bytes[] memory $results)
{
  $results = _plug($plugs, $plugs.executor, $gas);
}
```

Any time this function is used, the calling [Router](/core/routers) and the `signer` are validated to have the proper permissions. Without allowance given, the transaction will revert. However, when permissions are valid the [Router](/core/routers) has the ability to execute the transaction on behalf of the [Socket](/core/sockets). Notably, by default the Canonical Router of [Plug](/) is always allowed as a preferred method.

Due to the external call and need for execution compensation, `$gas` is passed along to track the amount of gas that the transaction started with; and in turn the amount of gas used during execution.

### Local Execution

Importantly, not all transactions to a [Socket](/core/sockets) have to be executed by a [Solver](/core/solvers). In several cases, there is still the desire for permissioned signers of a [Socket](/core/sockets) to immediately execute a transaction themselves.

```solidity
function plug(PlugTypesLib.Plugs calldata $plugs)
  external
  payable
  virtual
  enforceSigner(msg.sender)
  nonReentrant
  returns (bytes[] memory $results)
{
  $results = _plug($plugs, address(0), 0);
}
```

When doing this, the transaction does not have to be submit to the [Router](/core/routers) and can be a direct interaction with the [Socket](/core/sockets) itself. When doing this, there is no compensation for a [Solver](/core/solver) required and the signer takes on all the costs of executing directly.
