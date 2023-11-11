import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.6d94f49f.js";const b=JSON.parse('{"title":"ReplayProtection","description":"A ReplayProtection data type provides EIP-712 compatability for encoding and decoding.","frontmatter":{"head":[["meta",{"property":"og:title","content":"ReplayProtection"}],["meta",{"name":"description","content":"A ReplayProtection data type provides EIP-712 compatability for encoding and decoding."}],["meta",{"property":"og:description","content":"A ReplayProtection data type provides EIP-712 compatability for encoding and decoding."}]],"notes":[[{"author":"Auto generated by @nftchance/plug-types/cli"}]]},"headers":[],"relativePath":"generated/base-types/ReplayProtection.md","filePath":"generated/base-types/ReplayProtection.md","lastUpdated":1699736593000}'),p={name:"generated/base-types/ReplayProtection.md"},l=e(`<h1 id="replayprotection" tabindex="-1">ReplayProtection <a class="header-anchor" href="#replayprotection" aria-label="Permalink to &quot;ReplayProtection&quot;">​</a></h1><p>A <a href="/generated/base-types/ReplayProtection.html">ReplayProtection</a> data type provides EIP-712 compatability for encoding and decoding the data needed for an <code>Intent</code> to be securely distributed and executed.</p><h2 id="the-data-type" tabindex="-1">The Data Type <a class="header-anchor" href="#the-data-type" aria-label="Permalink to &quot;The Data Type&quot;">​</a></h2><p>To interact with the data type onchain will you need both the <code>Typescript</code> and <code>EIP-712</code> representations of the <code>ReplayProtection</code> data type:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-WHiuG" id="tab-_lMQq2I" checked="checked"><label for="tab-_lMQq2I">Typescript/Javascript</label><input type="radio" name="group-WHiuG" id="tab-9ZvSfUy"><label for="tab-9ZvSfUy">EIP-712</label></div><div class="blocks"><div class="language-typescript vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">nonce</span><span style="color:#E1E4E8;">: bigint,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">queue</span><span style="color:#E1E4E8;">: bigint </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">nonce</span><span style="color:#24292E;">: bigint,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">queue</span><span style="color:#24292E;">: bigint </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;nonce&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">	{ </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;queue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;"> } </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    { </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;nonce&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">	{ </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;queue&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;"> } </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The <code>Typescript</code> representation is used to build and work with the object in your dApp and API while the <code>EIP-712</code> representation is used to encode and decode the data type onchain.</p></div><h2 id="onchain-implementation" tabindex="-1">Onchain Implementation <a class="header-anchor" href="#onchain-implementation" aria-label="Permalink to &quot;Onchain Implementation&quot;">​</a></h2><p>With <code>nonce</code> and <code>queue</code> as the fields of the <code>ReplayProtection</code> data type we can generate the type hash as follows:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-gUeag" id="tab-yq1zK_P" checked="checked"><label for="tab-yq1zK_P">Verbose.sol</label><input type="radio" name="group-gUeag" id="tab-E_dJrV1"><label for="tab-E_dJrV1">Inline.sol</label><input type="radio" name="group-gUeag" id="tab-rh99lZ6"><label for="tab-rh99lZ6">Hash.sol</label></div><div class="blocks"><div class="language-solidity vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> REPLAY_PROTECTION_TYPEHASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keccak256</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">abi</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">encodePacked</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;ReplayProtection(&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;uint256 nonce&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;uint256 queue&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> REPLAY_PROTECTION_TYPEHASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keccak256</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">abi</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">encodePacked</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;ReplayProtection(&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;uint256 nonce&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;uint256 queue&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;)&quot;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> REPLAY_PROTECTION_TYPEHASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keccak256</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;ReplayProtection(uint256 nonce,uint256 queue)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> REPLAY_PROTECTION_TYPEHASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keccak256</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;ReplayProtection(uint256 nonce,uint256 queue)&#39;</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> REPLAY_PROTECTION_TYPEHASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0xfa66270feae79570dcb7f156d937c5c71c57d7c3c25e36c4e016664b1c6ea232</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> REPLAY_PROTECTION_TYPEHASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0xfa66270feae79570dcb7f156d937c5c71c57d7c3c25e36c4e016664b1c6ea232</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div>`,9),o=[l];function t(c,r,i,d,y,E){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{b as __pageData,h as default};