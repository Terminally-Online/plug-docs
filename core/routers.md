---
head:
  - - meta
    - property: og:title
      content: Routers
  - - meta
    - name: description
      content: Routers serve as the key entrypoint for external execution of Plug.
  - - meta
    - property: og:description
      content: Routers serve as the key entrypoint for external execution of Plug.
---

# Routers

For [Plug](/), a significant portion of the execution power lies in the ability to operate through a single Router. In function, this means that regardless of the target, the intents of [Plug](/) users are resolved most often through a `Router`.

Without a `Router`, [Solvers](/core/solvers) would have to run a transaction for every unique [Socket](/core/sockets). So, if they want to settle an intent for 10 different users they would have to interface with each of those targets. Instead, they simply interact with the `Router` that coordinates transactions for each of the [Sockets](/core/sockets) through a single transaction. Notably, there is often little reason for end-users to interact with the `Router` themselves. The existence and power of the `Router` is almost entirely realized by the [Solver](/core/solvers) of each intent.

## The Abstraction

An important benefit of a `Router` model is that it means there is no need for protocols already deployed to update nor is there a need for new protocols to integrate a piece of [Plug](/) directly. Instead, every contract deployed can be interacted with easily.

With localization, for a protocol to support intents there would have to be a wrapper for every connection. There would need to be a mechanism that enables the protocol to recover the sender from the message forwarded by the [Solver](/core/solvers).

Instead, a user of [Plug](/) simply signs a message for their [Vault](/instances/vaults) and execution is automatically routed through it. There's no sender recovery mechanism within the action. All actions are properly attributed without abstraction.

[Plug](/) is designed to make the primitives and protocols of the industry more powerful. Therefore, there is no integration expectation or new overhead introduced.

If a protocol wants to be supported, they can be without making a single change to their onchain implementation. With even the deepest level of integration, the only thing required is the development of a [Fuse](/core/fuses) which is not an obligation or expectation the consumed protocol itself carries.

To enable this, a `Router` contains to key functions that enable execution on behalf of [Sockets](/core/sockets):

- [plug](/core/routers/plug): Execute a single [LivePlugs](/generated/base-types/LivePlugs) bundle.
- [batch](/core/routers/batch): Execute a batch of [LivePlugs](/generated/base-types/LivePlugs) bundles.
