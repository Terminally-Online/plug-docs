import{_ as s,o as i,c as e,R as a}from"./chunks/framework.OBNbGUgv.js";const u=JSON.parse('{"title":"getLivePlugsSigner","description":"","frontmatter":{},"headers":[],"relativePath":"generated/signer-getters/getLivePlugsSigner.md","filePath":"generated/signer-getters/getLivePlugsSigner.md","lastUpdated":1707244544000}'),n={name:"generated/signer-getters/getLivePlugsSigner.md"},t=a(`<h1 id="getliveplugssigner" tabindex="-1">getLivePlugsSigner <a class="header-anchor" href="#getliveplugssigner" aria-label="Permalink to &quot;getLivePlugsSigner&quot;">​</a></h1><p>Get the signer of a <a href="/generated/base-types/LivePlugs.html">LivePlugs</a> data type.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><ul><li><code>$input</code> : <a href="/generated/base-types/LivePlugs.html">LivePlugs</a> : The <code>LivePlugs</code> data to encode.</li></ul><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><ul><li><code>$signer</code> : <code>address</code> : The signer of the <a href="/generated/base-types/LivePlugs.html">LivePlugs</a> data.</li></ul><h2 id="onchain-implementation" tabindex="-1">Onchain Implementation <a class="header-anchor" href="#onchain-implementation" aria-label="Permalink to &quot;Onchain Implementation&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-zr6RB" id="tab-4qPoRZr" checked="checked"><label for="tab-4qPoRZr">Types.sol:getLivePlugsSigner</label></div><div class="blocks"><div class="language-solidity vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getLivePlugsSigner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	TypesLib</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LivePlugs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> memory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">input</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> view</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> virtual</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> returns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">signer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	$signer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getPlugsDigest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($input.plugs).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">recover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		$input.signature</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div></div>`,8),l=[t];function r(p,h,d,g,k,o){return i(),e("div",null,l)}const E=s(n,[["render",r]]);export{u as __pageData,E as default};