import{_ as s,o as a,c as i,R as e}from"./chunks/framework.OBNbGUgv.js";const u=JSON.parse('{"title":"Fuse","description":"A Fuse data type provides EIP-712 compatability for encoding and decoding.","frontmatter":{"head":[["meta",{"property":"og:title","content":"Fuse"}],["meta",{"name":"description","content":"A Fuse data type provides EIP-712 compatability for encoding and decoding."}],["meta",{"property":"og:description","content":"A Fuse data type provides EIP-712 compatability for encoding and decoding."}]],"notes":[[{"author":"Auto generated by @nftchance/plug-types/cli"}]]},"headers":[],"relativePath":"generated/base-types/Fuse.md","filePath":"generated/base-types/Fuse.md","lastUpdated":1699842670000}'),n={name:"generated/base-types/Fuse.md"},t=e(`<h1 id="fuse" tabindex="-1">Fuse <a class="header-anchor" href="#fuse" aria-label="Permalink to &quot;Fuse&quot;">​</a></h1><p>A <a href="/generated/base-types/Fuse.html">Fuse</a> data type provides EIP-712 compatability for encoding and decoding the data needed for an <code>Plug</code> to be securely distributed and executed.</p><h2 id="the-data-type" tabindex="-1">The Data Type <a class="header-anchor" href="#the-data-type" aria-label="Permalink to &quot;The Data Type&quot;">​</a></h2><p>To interact with the data type onchain will you need both the <code>Typescript</code> and <code>EIP-712</code> representations of the <code>Fuse</code> data type:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-RSJpb" id="tab-DTzuRHq" checked="checked"><label for="tab-DTzuRHq">Typescript/Javascript</label><input type="radio" name="group-RSJpb" id="tab-NbUvwM0"><label for="tab-NbUvwM0">EIP-712</label></div><div class="blocks"><div class="language-typescript vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    neutral</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0x\${string}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	live</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0x\${string}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;neutral&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;address&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;live&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bytes&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The <code>Typescript</code> representation is used to build and work with the object in your dApp and API while the <code>EIP-712</code> representation is used to encode and decode the data type onchain.</p></div><h2 id="onchain-implementation" tabindex="-1">Onchain Implementation <a class="header-anchor" href="#onchain-implementation" aria-label="Permalink to &quot;Onchain Implementation&quot;">​</a></h2><p>With <code>neutral</code> and <code>live</code> as the fields of the <code>Fuse</code> data type we can generate the type hash as follows:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-5gQ4t" id="tab-puBiPC9" checked="checked"><label for="tab-puBiPC9">Verbose.sol</label><input type="radio" name="group-5gQ4t" id="tab-IT9uvrI"><label for="tab-IT9uvrI">Inline.sol</label><input type="radio" name="group-5gQ4t" id="tab-3iuXkVS"><label for="tab-3iuXkVS">Hash.sol</label></div><div class="blocks"><div class="language-solidity vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bytes32</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> constant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FUSE_TYPEHASH </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> keccak256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    abi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encodePacked</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;Fuse(&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;address neutral&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;bytes live&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bytes32</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> constant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FUSE_TYPEHASH </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> keccak256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;Fuse(address neutral,bytes live)&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bytes32</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> constant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FUSE_TYPEHASH </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x86dfe4f6559e569c29a2c4007b8d0df7d2a58f1f05891f9a9655ceb9105cfae6</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div>`,9),p=[t];function l(h,d,r,k,c,o){return a(),i("div",null,p)}const b=s(n,[["render",l]]);export{u as __pageData,b as default};