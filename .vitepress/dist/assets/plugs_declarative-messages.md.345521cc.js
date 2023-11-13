import{_ as e,o as a,c as t,Q as i}from"./chunks/framework.850b4e59.js";const f=JSON.parse('{"title":"Declarative Messages","description":"A brief breakdown of why plugs are important.","frontmatter":{"head":[["meta",{"property":"og:title","content":"Declarative Messages"}],["meta",{"name":"description","content":"A brief breakdown of why plugs are important."}],["meta",{"property":"og:description","content":"A brief breakdown of why plugs are important."}]]},"headers":[],"relativePath":"plugs/declarative-messages.md","filePath":"plugs/declarative-messages.md","lastUpdated":null}'),o={name:"plugs/declarative-messages.md"},s=i('<h1 id="declarative-messages" tabindex="-1">Declarative Messages <a class="header-anchor" href="#declarative-messages" aria-label="Permalink to &quot;Declarative Messages&quot;">​</a></h1><p>Unlike <a href="/plugs/imperative-transactions.html">Imperative Transactions</a>, <code>Declarative Messages</code> don&#39;t perform an action directly. Instead, they express an intent to perform an action under specific conditions.</p><p>Think of it like placing an order for a customized car. You aren&#39;t buying the car right then and there; you&#39;re specifying what you want (color, features, etc.), and the action (you receiving the car) happens later, once the car is built to your specifications.</p><h2 id="characteristics-of-declarative-messages" tabindex="-1">Characteristics of Declarative Messages <a class="header-anchor" href="#characteristics-of-declarative-messages" aria-label="Permalink to &quot;Characteristics of Declarative Messages&quot;">​</a></h2><h3 id="flexibility" tabindex="-1">Flexibility <a class="header-anchor" href="#flexibility" aria-label="Permalink to &quot;Flexibility&quot;">​</a></h3><p>Declarative messages offer a level of flexibility that is unmatched by their imperative counterparts. You can specify multiple conditions under which an action should be taken.</p><p>For instance, in a multi-signature wallet, a transaction could be executed only if a certain number of authorized signatures are gathered.</p><p>More interestingly, imagine that an employee is paid in an ERC20 that fluctuates in price, but compensation in USD denomenation. While they earn $10 USD they may earn 5000 $TOKEN. A declarative message could be used to automatically convert the defined USD amount to the ERC20 aprice at the time of payment without the employee having to do anything.</p><h3 id="conditional-execution" tabindex="-1">Conditional Execution <a class="header-anchor" href="#conditional-execution" aria-label="Permalink to &quot;Conditional Execution&quot;">​</a></h3><p>The hallmark of a declarative message is that it sets conditions for execution. Think of it like an &quot;<em>If, Then</em>&quot; statement. If all specified conditions are met, then the transaction will execute. Of course, if a bad actor was to run the declared transaction before the conditions were met, the transaction would fail because the &#39;<em>If</em>&#39; declared has not been satisfied.</p><h3 id="compositionality" tabindex="-1">Compositionality <a class="header-anchor" href="#compositionality" aria-label="Permalink to &quot;Compositionality&quot;">​</a></h3><p>Declarative messages can be composed together to form more complex transaction templates. In the blockchain ecosystem this is commonly referred to as transaction &#39;plugsing&#39; or &#39;bundling&#39;.</p><p>For instance, a single declarative message could involve a token swap, followed by staking the received tokens, but only if the initial token&#39;s price reaches a certain level.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>There is another common implementation of plugs settlement known as &#39;chaining&#39; where responses from previous functions are used to inform following ones however Plug does not currently support this.</p></div><h3 id="predictability" tabindex="-1">Predictability <a class="header-anchor" href="#predictability" aria-label="Permalink to &quot;Predictability&quot;">​</a></h3><p>Despite their complexity, declarative messages are designed to be predictable. Each condition within the message is verifiable, ensuring that participants can anticipate the outcome if all conditions are met.</p><p>With declarative messages, you can be confident that the transaction will execute as intended, even if it&#39;s a complex one.</p><p>If something can change to negatively impact the outcomes of your transaction, conditions can be set to protect against it.</p><h2 id="examples-of-declarative-messages" tabindex="-1">Examples of Declarative Messages <a class="header-anchor" href="#examples-of-declarative-messages" aria-label="Permalink to &quot;Examples of Declarative Messages&quot;">​</a></h2><h3 id="conditional-payments" tabindex="-1">Conditional Payments <a class="header-anchor" href="#conditional-payments" aria-label="Permalink to &quot;Conditional Payments&quot;">​</a></h3><p>Imagine you want to pay someone only if they complete a specific task by a certain date. You could create a declarative message that releases the funds only if proof of the completed task is submitted and verified on the blockchain by that date.</p><h3 id="automated-trading" tabindex="-1">Automated Trading <a class="header-anchor" href="#automated-trading" aria-label="Permalink to &quot;Automated Trading&quot;">​</a></h3><p>In decentralized finance (DeFi), traders often set conditions for buying or selling assets. For instance, you could specify that you want to sell a token if its price reaches a certain high, and buy it back if it drops to a specific low.</p><h3 id="escrow-services" tabindex="-1">Escrow Services <a class="header-anchor" href="#escrow-services" aria-label="Permalink to &quot;Escrow Services&quot;">​</a></h3><p>Using declarative messages, you can create a smart contract that serves as an escrow. The contract could release funds to a seller only after verifying that the buyer has received the shipped goods.</p><h3 id="governance-proposals" tabindex="-1">Governance Proposals <a class="header-anchor" href="#governance-proposals" aria-label="Permalink to &quot;Governance Proposals&quot;">​</a></h3><p>In a DAO, you could use declarative messages to propose changes that only go into effect if they receive enough votes and meet any other specified conditions.</p><h2 id="why-declarative-messages-are-vital" tabindex="-1">Why Declarative Messages are Vital <a class="header-anchor" href="#why-declarative-messages-are-vital" aria-label="Permalink to &quot;Why Declarative Messages are Vital&quot;">​</a></h2><p>Declarative messages serve as the building blocks for more complex and conditional transactions, enabling functionalities that go beyond the capabilities of basic, imperative transactions. This added layer of flexibility is critical for the development of decentralized applications (dApps) and smart contracts that require a broad range of user interactions and system states.</p><p>For instance, they enable the creation of decentralized autonomous organizations (DAOs), conditional payments in DeFi, and much more. This makes declarative messages an essential tool in achieving the full potential of what blockchain technology promises: a more decentralized, transparent, and programmable world of transactions and agreements.</p><p>In essence, while imperative transactions are akin to individual brush strokes, declarative messages are the palettes and techniques that allow for the creation of a full-fledged painting. They add depth, context, and sophistication to the blockchain canvas, allowing for a more intricate and detailed representation of agreements and actions.</p>',31),n=[s];function r(c,l,d,h,p,m){return a(),t("div",null,n)}const g=e(o,[["render",r]]);export{f as __pageData,g as default};
