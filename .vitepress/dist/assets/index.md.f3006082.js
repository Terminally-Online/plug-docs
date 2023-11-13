import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.850b4e59.js";const E=JSON.parse('{"title":"Getting Started","description":"Build your first protocol with Plug in minutes.","frontmatter":{"head":[["meta",{"property":"og:title","content":"Getting Started"}],["meta",{"name":"description","content":"Build your first protocol with Plug in minutes."}],["meta",{"property":"og:description","content":"Build your first protocol with Plug in minutes."}]]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1699738671000}'),l={name:"index.md"},o=e(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Plug is a <code>Solidity</code> protocol and <code>Typescript</code> interface for building and interacting with protocols that support declarative EVM transactions (plugs).</p><p>You can learn about the rationale behind the project in the <a href="/introduction/why-plug.html">Why Plug</a> section.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>To get up and running with <code>Plug</code>, you&#39;ll need to install the core protocol and the interface by opening a terminal and running the following command with your package manager of your choice:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-rnmRA" id="tab-MBfGPwF" checked="checked"><label for="tab-MBfGPwF">npm</label><input type="radio" name="group-rnmRA" id="tab-lyEMb4i"><label for="tab-lyEMb4i">pnpm</label><input type="radio" name="group-rnmRA" id="tab-kUO3As3"><label for="tab-kUO3As3">bun</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@nftchance/plug-core</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@nftchance/plug-core</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@nftchance/plug-core</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@nftchance/plug-core</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@nftchance/plug-core</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@nftchance/plug-core</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h2 id="quickstart" tabindex="-1">Quickstart <a class="header-anchor" href="#quickstart" aria-label="Permalink to &quot;Quickstart&quot;">​</a></h2><p>All in all there are really only 2-3 steps when interacting with <code>Plug</code>.</p><h3 id="_1-setup-your-protocol" tabindex="-1">1. Setup your Protocol <a class="header-anchor" href="#_1-setup-your-protocol" aria-label="Permalink to &quot;1. Setup your Protocol&quot;">​</a></h3><p>Integrating <code>Plug</code> into your protocol is as simple as inheriting from the <code>Plug</code> contract and passing in your protocol&#39;s name and version to declare the <a href="https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator" target="_blank" rel="noreferrer">domain</a> of your protocol&#39;s plugs:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-PmA5p" id="tab-WvaDibw" checked="checked"><label for="tab-WvaDibw">PeerToPeerBridge.sol</label></div><div class="blocks"><div class="language-solidity vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// SPDX-License-Identifier: MIT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">pragma</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">solidity</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">^0.8.19</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line has-focus highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { </span><span style="color:#B392F0;">Plug</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@nftchance/plug-core/src/contracts/abstracts/Plug.sol&#39;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line has-focus"></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">contract PeerToPeerBridge is Plug { </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">constructor</span><span style="color:#E1E4E8;">(</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">memory</span><span style="color:#E1E4E8;"> $</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">memory</span><span style="color:#E1E4E8;"> $</span><span style="color:#B392F0;">version</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Plug</span><span style="color:#E1E4E8;">($</span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">, $</span><span style="color:#B392F0;">version</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">    { }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// SPDX-License-Identifier: MIT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">pragma</span><span style="color:#24292E;"> </span><span style="color:#22863A;">solidity</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">^0.8.19</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line has-focus highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { </span><span style="color:#6F42C1;">Plug</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@nftchance/plug-core/src/contracts/abstracts/Plug.sol&#39;</span><span style="color:#24292E;">  </span></span>
<span class="line has-focus"></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">contract PeerToPeerBridge is Plug { </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">constructor</span><span style="color:#24292E;">(</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">memory</span><span style="color:#24292E;"> $</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">memory</span><span style="color:#24292E;"> $</span><span style="color:#6F42C1;">version</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Plug</span><span style="color:#24292E;">($</span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">, $</span><span style="color:#6F42C1;">version</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">    { }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></div></div><p>By inheriting from <code>Plug</code>, <code>invoke</code> and <code>contractInvoke</code> are added to your protocol enabling full support for plugs in just those few lines; <strong>there is no need to write any additional code or fiddle with the internals of the protocol.</strong></p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Note: The contracts of Plug have not yet undergone a complete audit. Please do not launch into production without a thorough review of the codebase.</p></div><h3 id="_2-sign-the-pin" tabindex="-1">2. Sign the Pin <a class="header-anchor" href="#_2-sign-the-pin" aria-label="Permalink to &quot;2. Sign the Pin&quot;">​</a></h3><p>With your contract declared, it is now time to configure the conditions under which the transaction can be executed and distribute the pins. Let&#39;s go ahead and declare the pin tree for our intent and delegate to a different account:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-MwJwf" id="tab-lofNgHw" checked="checked"><label for="tab-lofNgHw">./example.ts</label></div><div class="blocks"><div class="language-typescript vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// * Create a new instance of the Plug framework.</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">framework</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Plug</span><span style="color:#E1E4E8;">(name, version, chainId, constants.types, contract);</span></span>
<span class="line"></span>
<span class="line has-focus"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signedPin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> framework.</span><span style="color:#B392F0;">sign</span><span style="color:#E1E4E8;">(owner, </span><span style="color:#9ECBFF;">&quot;Pin&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  delegate: </span><span style="color:#B392F0;">getAddress</span><span style="color:#E1E4E8;">(owner.account.address),</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  authority: </span><span style="color:#B392F0;">bytes32</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">),</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  fuses: [],</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  salt: </span><span style="color:#B392F0;">bytes32</span><span style="color:#E1E4E8;">(Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">()),</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">});</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#6A737D;">// * Retrieve the object that will be passed onchain.</span></span>
<span class="line highlighted"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">LivePin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> signedPin.intent;</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// * Create a new instance of the Plug framework.</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">framework</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Plug</span><span style="color:#24292E;">(name, version, chainId, constants.types, contract);</span></span>
<span class="line"></span>
<span class="line has-focus"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signedPin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> framework.</span><span style="color:#6F42C1;">sign</span><span style="color:#24292E;">(owner, </span><span style="color:#032F62;">&quot;Pin&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line has-focus"><span style="color:#24292E;">  delegate: </span><span style="color:#6F42C1;">getAddress</span><span style="color:#24292E;">(owner.account.address),</span></span>
<span class="line has-focus"><span style="color:#24292E;">  authority: </span><span style="color:#6F42C1;">bytes32</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">),</span></span>
<span class="line has-focus"><span style="color:#24292E;">  fuses: [],</span></span>
<span class="line has-focus"><span style="color:#24292E;">  salt: </span><span style="color:#6F42C1;">bytes32</span><span style="color:#24292E;">(Date.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">()),</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">});</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#6A737D;">// * Retrieve the object that will be passed onchain.</span></span>
<span class="line highlighted"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">LivePin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> signedPin.intent;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></div></div><p>With just these few lines of code we have:</p><ul><li>Instantied a new instance of the Plug that will hold our intent references.</li><li>Live the raw pin delegation object with the <code>owner</code> account.</li><li>Declared the object type as <code>Delegation</code>.</li><li>Set the <code>authority</code> to <code>bytes32(0)</code> to give the invoker full control.</li><li>Left fuses empty to allow the invoker free reign over the execution. <ul><li>When you&#39;re building a real app you will have many fuses, but for simplicity we&#39;re leaving them out for now as the precise input shape and data is highly dependent on your protocol and implementation.</li></ul></li><li>Set the <code>salt</code> to the current timestamp to ensure the intent is unique.</li><li>Retrieved the <code>LiveDelegation</code> object that will be passed and verified onchain.</li></ul><p>That&#39;s a lot happening in just a few lines so it may take a second to wrap your head around it fully. As you&#39;re getting more familiar with the architecture, you have all the help of <code>Typescript</code> autocomplete at your fingertips. <strong>Don&#39;t be afraid to use it.</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Note, in this example <code>authority</code> was set to <code>0x0</code> which gives the invoker full control over the delegated function. If you want to restrict the invoker to a specific function, you can set the <code>authority</code> to the address of the function you want to delegate to. We will get into the details of <a href="/core/fuse.html">Fuses</a> shortly.</p></div><h3 id="_3-sign-an-plug" tabindex="-1">3. Sign an Plug <a class="header-anchor" href="#_3-sign-an-plug" aria-label="Permalink to &quot;3. Sign an Plug&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>TODO: Write the documentation for this piece.</p></div>`,23),p=[o];function t(c,r,i,d,h,y){return a(),n("div",null,p)}const g=s(l,[["render",t]]);export{E as __pageData,g as default};
