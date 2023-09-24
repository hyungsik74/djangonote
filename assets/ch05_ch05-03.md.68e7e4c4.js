import{_ as s}from"./chunks/ch05-03-03_01.643af450.js";import{_ as a,o as n,c as l,Q as o}from"./chunks/framework.4976f53a.js";const p="/djangonote/assets/ch05-03-02_01.c802148b.png",e="/djangonote/assets/ch05-03-07_01.e8f26cfc.png",u=JSON.parse('{"title":"5-3. 사용자 어플리케이션 작성","description":"","frontmatter":{},"headers":[],"relativePath":"ch05/ch05-03.md","filePath":"ch05/ch05-03.md"}'),t={name:"ch05/ch05-03.md"},c=o(`<link rel="stylesheet" href="../css/style.css"><h1 id="_5-3-사용자-어플리케이션-작성" tabindex="-1">5-3. 사용자 어플리케이션 작성 <a class="header-anchor" href="#_5-3-사용자-어플리케이션-작성" aria-label="Permalink to &quot;5-3. 사용자 어플리케이션 작성&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">startapp bookmark</p><p>이전 장에서 bookmark 어플리케이션을 설계할 때 5개의 화면 페이지가 필요했습니다. 이 5개의 페이지에 대해서 필요한 뷰 와 템플릿을 작성하겠습니다. 화면을 작성하기 위해서 처리흐름에 대한 로직이 설계되어야 합니다. 여기서는 4개의 URL와 뷰와 3개의 템플릿 파일이 필요합니다.</p></div><h2 id="_5-3-1-url-설계" tabindex="-1">5-3-1. URL 설계 <a class="header-anchor" href="#_5-3-1-url-설계" aria-label="Permalink to &quot;5-3-1. URL 설계&quot;">​</a></h2><p>다음은 요청 URL 과 장고 View를 매핑한 리스트입니다. 각 뷰에서 처리하는 내용을 잘 이해해야 합니다.</p><table><thead><tr><th>URL 패턴</th><th style="text-align:left;">뷰 이름</th><th style="text-align:left;">뷰가 처리하는 내용</th></tr></thead><tbody><tr><td>/bookmark/</td><td style="text-align:left;">list()</td><td style="text-align:left;">bookmark 리스트 템플릿을 보여 줍니다.</td></tr><tr><td>/bookmark/add/</td><td style="text-align:left;">add()</td><td style="text-align:left;">add.html 템플릿을 보여 줍니다.</td></tr><tr><td>/bookmark/detail/1/</td><td style="text-align:left;">detail()</td><td style="text-align:left;">detail.html 템플릿을 보여 줍니다.</td></tr><tr><td>/bookmark/update/1/</td><td style="text-align:left;">update()</td><td style="text-align:left;">update.html의 폼을 POST 방식으로 처리합니다.</td></tr><tr><td>/bookmark/delete/1/</td><td style="text-align:left;">delete()</td><td style="text-align:left;">delete.html 템플릿을 보여 줍니다.</td></tr><tr><td>/admin/</td><td style="text-align:left;">(기본제공)</td><td style="text-align:left;">관리자 사이트를 보여 줍니다. (장고제공)</td></tr></tbody></table><h2 id="_5-3-2-어플리케이션-생성" tabindex="-1">5-3-2. 어플리케이션 생성 <a class="header-anchor" href="#_5-3-2-어플리케이션-생성" aria-label="Permalink to &quot;5-3-2. 어플리케이션 생성&quot;">​</a></h2><p>다음은 파이썬 startapp 명령어로 어플리케이션을 생성하도록 하겠습니다. bookmark라는 어플리케이션 명을 입력합니다.</p><div class="console-block" id="console-block-2"><input class="c-tab-win" id="c-tab-2-win" type="radio" name="console-2" checked=""><label for="c-tab-2-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-2-unix" type="radio" name="console-2"><label for="c-tab-2-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-2-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\&gt; cd bookmark-project
C:\\hyungsik74\\pycharm\\bookmark-project&gt; cd 
C:\\hyungsik74\\pycharm\\bookmark-project
C:\\hyungsik74\\pycharm\\bookmark-project&gt; python manage.py startapp bookmark
</pre></div></section><section class="c-content-unix" id="c-content-2-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command 
$/home/hyungsik74/pycharm&gt; cd bookmark-project
$/home/hyungsik74/pycharm/bookmark-project&gt; pwd
/home/hyungsik74/pycharm/bookmark-project
$/home/hyungsik74/pycharm/bookmark-project&gt; python manage.py startapp bookmark 
</pre></div></div></section></div><p>어플리케이션 생성후 디렉토리 구조입니다.</p><p><img src="`+p+`" alt="ch05-03-02_01.png"> 그림5-3-2. startapp 후 디렉토리</p><p>다음은 bookmark 어플리케이션에서 사용되는 전체 폴더 구조입니다. 참고하세요.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">hyungsik74</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ pycharm</span></span>
<span class="line"><span style="color:#e1e4e8;">  └─ bookmark-project</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─ bookmark</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ migrations</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  |  └─ 0001_initial.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ templates</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  |  ├─ bookmark</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  │  |  ├─ bookmark_confirm_delete.html</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  │  |  ├─ bookmark_create.html</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  │  |  ├─ bookmark_detail.html</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  │  |  ├─ bookmark_list.html</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  │  |  └─ bookmark_update.html</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ admin.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ apps.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ models.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ tests.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ urls.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  └─ views.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─ config</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ asgi.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ settings.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ urls.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  └─ wsgi.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─ static</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  └─ style.css    </span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─ static_files</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  └─ admin</span></span>
<span class="line"><span style="color:#e1e4e8;">    |      ├─ css</span></span>
<span class="line"><span style="color:#e1e4e8;">    |      ├─ fonts</span></span>
<span class="line"><span style="color:#e1e4e8;">    |      ├─ img</span></span>
<span class="line"><span style="color:#e1e4e8;">    |      └─ js</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  └─ style.css    </span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─ templates</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  └─ base.html  </span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─ db.sqlite3</span></span>
<span class="line"><span style="color:#e1e4e8;">    └─ manage.py</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">hyungsik74</span></span>
<span class="line"><span style="color:#24292e;">└─ pycharm</span></span>
<span class="line"><span style="color:#24292e;">  └─ bookmark-project</span></span>
<span class="line"><span style="color:#24292e;">    ├─ bookmark</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ migrations</span></span>
<span class="line"><span style="color:#24292e;">    │  |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#24292e;">    │  |  └─ 0001_initial.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ templates</span></span>
<span class="line"><span style="color:#24292e;">    │  |  ├─ bookmark</span></span>
<span class="line"><span style="color:#24292e;">    |  │  |  ├─ bookmark_confirm_delete.html</span></span>
<span class="line"><span style="color:#24292e;">    |  │  |  ├─ bookmark_create.html</span></span>
<span class="line"><span style="color:#24292e;">    |  │  |  ├─ bookmark_detail.html</span></span>
<span class="line"><span style="color:#24292e;">    |  │  |  ├─ bookmark_list.html</span></span>
<span class="line"><span style="color:#24292e;">    |  │  |  └─ bookmark_update.html</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ admin.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ apps.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ models.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ tests.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ urls.py</span></span>
<span class="line"><span style="color:#24292e;">    |  └─ views.py</span></span>
<span class="line"><span style="color:#24292e;">    ├─ config</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ asgi.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ settings.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ urls.py</span></span>
<span class="line"><span style="color:#24292e;">    |  └─ wsgi.py</span></span>
<span class="line"><span style="color:#24292e;">    ├─ static</span></span>
<span class="line"><span style="color:#24292e;">    |  └─ style.css    </span></span>
<span class="line"><span style="color:#24292e;">    ├─ static_files</span></span>
<span class="line"><span style="color:#24292e;">    |  └─ admin</span></span>
<span class="line"><span style="color:#24292e;">    |      ├─ css</span></span>
<span class="line"><span style="color:#24292e;">    |      ├─ fonts</span></span>
<span class="line"><span style="color:#24292e;">    |      ├─ img</span></span>
<span class="line"><span style="color:#24292e;">    |      └─ js</span></span>
<span class="line"><span style="color:#24292e;">    |  └─ style.css    </span></span>
<span class="line"><span style="color:#24292e;">    ├─ templates</span></span>
<span class="line"><span style="color:#24292e;">    |  └─ base.html  </span></span>
<span class="line"><span style="color:#24292e;">    ├─ db.sqlite3</span></span>
<span class="line"><span style="color:#24292e;">    └─ manage.py</span></span></code></pre></div><h3 id="프로젝트-설정-파일-settings-py-추가" tabindex="-1">프로젝트 설정 파일(settings.py) 추가 <a class="header-anchor" href="#프로젝트-설정-파일-settings-py-추가" aria-label="Permalink to &quot;프로젝트 설정 파일(settings.py) 추가&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-MR03A" id="tab-6UebDQR" checked="checked"><label for="tab-6UebDQR">/config/settings.py</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Application definition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">INSTALLED_APPS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;bookmark&#39;</span><span style="color:#E1E4E8;">,            </span><span style="color:#6A737D;"># 추가  bookmark.apps.bookmarkConfig 동일함.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.admin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.auth&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.contenttypes&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.sessions&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.messages&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.staticfiles&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Application definition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">INSTALLED_APPS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;bookmark&#39;</span><span style="color:#24292E;">,            </span><span style="color:#6A737D;"># 추가  bookmark.apps.bookmarkConfig 동일함.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.admin&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.auth&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.contenttypes&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.sessions&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.messages&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.staticfiles&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div></div></div><h2 id="_5-3-3-북마크-데이터모델-생성" tabindex="-1">5-3-3. 북마크 데이터모델 생성 <a class="header-anchor" href="#_5-3-3-북마크-데이터모델-생성" aria-label="Permalink to &quot;5-3-3. 북마크 데이터모델 생성&quot;">​</a></h2><p>데이터모델 생성은 장고 프레임웍에서 데이터베이스 관련 테이블 등을 생성을 하는 단계입니다. 다음의 순서대로 생성합니다.</p><div class="console-block" id="console-block-3"><input class="c-tab-win" id="c-tab-3-win" type="radio" name="console-3" checked=""><label for="c-tab-3-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-3-unix" type="radio" name="console-3"><label for="c-tab-3-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-3-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\bookmark-project&gt; cd bookmark
C:\\hyungsik74\\pycharm\\bookmark-projectbookmark&gt; cd 
C:\\hyungsik74\\pycharm\\bookmark-projectbookmark
// 테이블을 정의함
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark&gt; notepad models.py  
// 관리자화면에 표시 
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark&gt; notepad admin.py   
</pre></div></section><section class="c-content-unix" id="c-content-3-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/bookmark-project&gt; cd bookmark
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; pwd
/home/hyungsik74/pycharm/bookmark-project/bookmark
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; vi models.py
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; vi admin.py
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-yY_Y3" id="tab-qjXqTth" checked="checked"><label for="tab-qjXqTth">models.py</label><input type="radio" name="group-yY_Y3" id="tab-JP_-kNN"><label for="tab-JP_-kNN">admins.py</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.db </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> models</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> reverse</span></span>
<span class="line"><span style="color:#6A737D;"># Create your models here.</span></span>
<span class="line"><span style="color:#6A737D;"># 모델 : 데이터베이스를 SQL없이 다루려고 모델을 사용</span></span>
<span class="line"><span style="color:#6A737D;"># 우리가 데이터를 객체화해서 다루겠다.</span></span>
<span class="line"><span style="color:#6A737D;"># 모델 = 테이블</span></span>
<span class="line"><span style="color:#6A737D;"># 모델의 필드 = 테이블의 컬럼</span></span>
<span class="line"><span style="color:#6A737D;"># 인스턴스 = 테이블의 레코드</span></span>
<span class="line"><span style="color:#6A737D;"># 필드의 값(인스턴스의 필드값) = 레코드의 컬럼 데이터값</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bookmark</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">models</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Model</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    site_name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.CharField(</span><span style="color:#FFAB70;">max_length</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.URLField(</span><span style="color:#9ECBFF;">&#39;Site URL&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 필드의 종류가 결정하는 것</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 1. 데이터베이스의 컬럼 종류</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 2. 제약 사항 (몇글자까지)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 3. Form의 종류</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 4. Form에서 제약 사항</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__str__</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;이름 : &quot;</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.site_name</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&quot;, 주소 : &quot;</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.url</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get_absolute_url</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> reverse(</span><span style="color:#9ECBFF;">&#39;bookmark:detail&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.id])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 모델을 만들었다 =&gt; 데이터베이스에 어떤 데이터들을 어떤 형태로 넣을지 결정!</span></span>
<span class="line"><span style="color:#6A737D;"># makemigrations =&gt; 모델의 변경사항을 추적해서 기록</span></span>
<span class="line"><span style="color:#6A737D;"># 마이그레이션(migrate) =&gt; 데이터베이스에 모델의 내용을 반영(테이블 생성)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.db </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> models</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> reverse</span></span>
<span class="line"><span style="color:#6A737D;"># Create your models here.</span></span>
<span class="line"><span style="color:#6A737D;"># 모델 : 데이터베이스를 SQL없이 다루려고 모델을 사용</span></span>
<span class="line"><span style="color:#6A737D;"># 우리가 데이터를 객체화해서 다루겠다.</span></span>
<span class="line"><span style="color:#6A737D;"># 모델 = 테이블</span></span>
<span class="line"><span style="color:#6A737D;"># 모델의 필드 = 테이블의 컬럼</span></span>
<span class="line"><span style="color:#6A737D;"># 인스턴스 = 테이블의 레코드</span></span>
<span class="line"><span style="color:#6A737D;"># 필드의 값(인스턴스의 필드값) = 레코드의 컬럼 데이터값</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Bookmark</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">models</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Model</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    site_name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.CharField(</span><span style="color:#E36209;">max_length</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.URLField(</span><span style="color:#032F62;">&#39;Site URL&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 필드의 종류가 결정하는 것</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 1. 데이터베이스의 컬럼 종류</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 2. 제약 사항 (몇글자까지)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 3. Form의 종류</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 4. Form에서 제약 사항</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__str__</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;이름 : &quot;</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.site_name</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&quot;, 주소 : &quot;</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.url</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get_absolute_url</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> reverse(</span><span style="color:#032F62;">&#39;bookmark:detail&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">args</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.id])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 모델을 만들었다 =&gt; 데이터베이스에 어떤 데이터들을 어떤 형태로 넣을지 결정!</span></span>
<span class="line"><span style="color:#6A737D;"># makemigrations =&gt; 모델의 변경사항을 추적해서 기록</span></span>
<span class="line"><span style="color:#6A737D;"># 마이그레이션(migrate) =&gt; 데이터베이스에 모델의 내용을 반영(테이블 생성)</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.contrib </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> admin</span></span>
<span class="line"><span style="color:#6A737D;"># Register your models here.</span></span>
<span class="line"><span style="color:#6A737D;"># 내가 만든 모델을 관리자 페이지에서 관리할 수 있도록 등록</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">admin.site.register(Bookmark)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.contrib </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> admin</span></span>
<span class="line"><span style="color:#6A737D;"># Register your models here.</span></span>
<span class="line"><span style="color:#6A737D;"># 내가 만든 모델을 관리자 페이지에서 관리할 수 있도록 등록</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">admin.site.register(Bookmark)</span></span></code></pre></div></div></div><div class="console-block" id="console-block-31"><input class="c-tab-win" id="c-tab-31-win" type="radio" name="console-31" checked=""><label for="c-tab-31-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-31-unix" type="radio" name="console-31"><label for="c-tab-31-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-31-win" style=""><div class="highlight"><pre>windows command 
// DB 변경사항
C:\\hyungsik74\\pycharm\\bookmark-project&gt; py manage.py makemigrations bookmark  
C:\\hyungsik74\\pycharm\\bookmark-project&gt; py manage.py sqlmigrate bookmark 0001
// DB 변경사항 반영
C:\\hyungsik74\\pycharm\\bookmark-project&gt; py manage.py migrate   
// 실행
C:\\hyungsik74\\pycharm\\bookmark-project&gt; py manage.py runserver   
</pre></div></section><section class="c-content-unix" id="c-content-31-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/bookmark-project&gt; pwd
/home/hyungsik74/pycharm/bookmark-project
$/home/hyungsik74/pycharm/bookmark-project&gt; python manage.py makemigrations bookmark
$/home/hyungsik74/pycharm/bookmark-project&gt; python manage.py migrate
$/home/hyungsik74/pycharm/bookmark-project&gt; python manage.py runserver
</pre></div></div></section></div><div class="language-log vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">log</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">(venv) PS C:\\hyungsik74\\pycharm\\bookmark-project&gt; python manage.py startapp bookmark</span></span>
<span class="line"><span style="color:#e1e4e8;">(venv) PS C:\\hyungsik74\\pycharm\\bookmark-project&gt; py manage.py makemigrations bookmark</span></span>
<span class="line"><span style="color:#e1e4e8;">Migrations for &#39;bookmark&#39;:</span></span>
<span class="line"><span style="color:#e1e4e8;">  bookmark\\migrations\\0001_initial.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    - Create model Bookmark          </span></span>
<span class="line"><span style="color:#e1e4e8;">(venv) PS C:\\hyungsik74\\pycharm\\bookmark-project&gt; py manage.py sqlmigrate bookmark 0001</span></span>
<span class="line"><span style="color:#e1e4e8;">BEGIN;</span></span>
<span class="line"><span style="color:#e1e4e8;">--                                                                                                                                                 </span></span>
<span class="line"><span style="color:#e1e4e8;">-- Create model Bookmark                                                                                                                           </span></span>
<span class="line"><span style="color:#e1e4e8;">--                                                                                                                                                 </span></span>
<span class="line"><span style="color:#e1e4e8;">CREATE TABLE &quot;bookmark_bookmark&quot; (</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;id&quot; integer NOT NULL PRIMARY KEY AUTOINCREMENT, </span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;site_name&quot; varchar(100) NOT NULL, </span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;url&quot; varchar(200) NOT NULL);</span></span>
<span class="line"><span style="color:#e1e4e8;">COMMIT;                                                                                                                                            </span></span>
<span class="line"><span style="color:#e1e4e8;">(venv) PS C:\\hyungsik74\\pycharm\\bookmark-project&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">(venv) PS C:\\hyungsik74\\pycharm\\bookmark-project&gt; py manage.py migrate</span></span>
<span class="line"><span style="color:#e1e4e8;">Operations to perform:</span></span>
<span class="line"><span style="color:#e1e4e8;">  Apply all migrations: admin, auth, bookmark, contenttypes, sessions</span></span>
<span class="line"><span style="color:#e1e4e8;">Running migrations:</span></span>
<span class="line"><span style="color:#e1e4e8;">  Applying bookmark.0001_initial... OK</span></span>
<span class="line"><span style="color:#e1e4e8;">(venv) PS C:\\hyungsik74\\pycharm\\bookmark-project&gt; py manage.py runserver</span></span>
<span class="line"><span style="color:#e1e4e8;">Watching for file changes with StatReloader</span></span>
<span class="line"><span style="color:#e1e4e8;">Performing system checks...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">System check identified no issues (0 silenced).</span></span>
<span class="line"><span style="color:#e1e4e8;">September 24, 2023 - 12:55:42                         </span></span>
<span class="line"><span style="color:#e1e4e8;">Django version 4.2.5, using settings &#39;config.settings&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">Starting development server at http://127.0.0.1:8000/</span></span>
<span class="line"><span style="color:#e1e4e8;">Quit the server with CTRL-BREAK.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">(venv) PS C:\\hyungsik74\\pycharm\\bookmark-project&gt; python manage.py startapp bookmark</span></span>
<span class="line"><span style="color:#24292e;">(venv) PS C:\\hyungsik74\\pycharm\\bookmark-project&gt; py manage.py makemigrations bookmark</span></span>
<span class="line"><span style="color:#24292e;">Migrations for &#39;bookmark&#39;:</span></span>
<span class="line"><span style="color:#24292e;">  bookmark\\migrations\\0001_initial.py</span></span>
<span class="line"><span style="color:#24292e;">    - Create model Bookmark          </span></span>
<span class="line"><span style="color:#24292e;">(venv) PS C:\\hyungsik74\\pycharm\\bookmark-project&gt; py manage.py sqlmigrate bookmark 0001</span></span>
<span class="line"><span style="color:#24292e;">BEGIN;</span></span>
<span class="line"><span style="color:#24292e;">--                                                                                                                                                 </span></span>
<span class="line"><span style="color:#24292e;">-- Create model Bookmark                                                                                                                           </span></span>
<span class="line"><span style="color:#24292e;">--                                                                                                                                                 </span></span>
<span class="line"><span style="color:#24292e;">CREATE TABLE &quot;bookmark_bookmark&quot; (</span></span>
<span class="line"><span style="color:#24292e;">    &quot;id&quot; integer NOT NULL PRIMARY KEY AUTOINCREMENT, </span></span>
<span class="line"><span style="color:#24292e;">    &quot;site_name&quot; varchar(100) NOT NULL, </span></span>
<span class="line"><span style="color:#24292e;">    &quot;url&quot; varchar(200) NOT NULL);</span></span>
<span class="line"><span style="color:#24292e;">COMMIT;                                                                                                                                            </span></span>
<span class="line"><span style="color:#24292e;">(venv) PS C:\\hyungsik74\\pycharm\\bookmark-project&gt; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">(venv) PS C:\\hyungsik74\\pycharm\\bookmark-project&gt; py manage.py migrate</span></span>
<span class="line"><span style="color:#24292e;">Operations to perform:</span></span>
<span class="line"><span style="color:#24292e;">  Apply all migrations: admin, auth, bookmark, contenttypes, sessions</span></span>
<span class="line"><span style="color:#24292e;">Running migrations:</span></span>
<span class="line"><span style="color:#24292e;">  Applying bookmark.0001_initial... OK</span></span>
<span class="line"><span style="color:#24292e;">(venv) PS C:\\hyungsik74\\pycharm\\bookmark-project&gt; py manage.py runserver</span></span>
<span class="line"><span style="color:#24292e;">Watching for file changes with StatReloader</span></span>
<span class="line"><span style="color:#24292e;">Performing system checks...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">System check identified no issues (0 silenced).</span></span>
<span class="line"><span style="color:#24292e;">September 24, 2023 - 12:55:42                         </span></span>
<span class="line"><span style="color:#24292e;">Django version 4.2.5, using settings &#39;config.settings&#39;</span></span>
<span class="line"><span style="color:#24292e;">Starting development server at http://127.0.0.1:8000/</span></span>
<span class="line"><span style="color:#24292e;">Quit the server with CTRL-BREAK.</span></span></code></pre></div><p>지금까지 작성한 내용을 확인하기 위해서, 프로젝트를 실행합니다. 관리자 페이지에 접속하면, 다음과 같이 새로 생성한 Bookmarks 테이블을 확인 할 수 있습니다.</p><p>*Admin (<a href="http://127.0.0.1:8000/admin" target="_blank" rel="noreferrer">http://127.0.0.1:8000/admin</a>) 사이트 로그인 후 첫 페이지</p><p><img src="`+s+`" alt="ch05-03-03_01.png"> 그림5-03-01. 관리자 bookmark 테이블 생성 화면</p><h2 id="_5-3-4-url-config" tabindex="-1">5-3-4. URL Config <a class="header-anchor" href="#_5-3-4-url-config" aria-label="Permalink to &quot;5-3-4. URL Config&quot;">​</a></h2><p>이전 장에서 처리 흐름에 따라 URL 및 View를 설계했습니다. URL config라 함은 이런 URL 과 뷰를 연결해 주는 작업입니다. 관리자 페이지를 포함해서 5개의 URL 과 뷰가 필요합니다.</p><div class="console-block" id="console-block-4"><input class="c-tab-win" id="c-tab-4-win" type="radio" name="console-4" checked=""><label for="c-tab-4-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-4-unix" type="radio" name="console-4"><label for="c-tab-4-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-4-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\bookmark-project\\config&gt; cd 
C:\\hyungsik74\\pycharm\\bookmark-project\\config
C:\\hyungsik74\\pycharm\\bookmark-project\\config&gt; notepad urls.py
C:\\hyungsik74\\pycharm\\bookmark-project\\config&gt; cd ..\\bookmark
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark&gt; cd
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark&gt; notepad urls.py
</pre></div></section><section class="c-content-unix" id="c-content-4-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/bookmark-project&gt; cd /home/hyungsik74/pycharm/bookmark-project/config
$/home/hyungsik74/pycharm/bookmark-project/confing&gt; pwd
/home/hyungsik74/pycharm/bookmark-project/config
$/home/hyungsik74/pycharm/bookmark-project/config&gt; vi urls.py
$/home/hyungsik74/pycharm/bookmark-project&gt; cd /home/hyungsik74/pycharm/bookmark-project/bookmark
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; pwd
/home/hyungsik74/pycharm/bookmark-project/bookmark
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; vi urls.py
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-gIoYG" id="tab-Cmn-ChF" checked="checked"><label for="tab-Cmn-ChF">config/urls.py</label><input type="radio" name="group-gIoYG" id="tab-SZOx7Eg"><label for="tab-SZOx7Eg">bookmark/urls.py</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.contrib </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> admin</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> include, path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">urlpatterns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;bookmark/&quot;</span><span style="color:#E1E4E8;">, include(</span><span style="color:#9ECBFF;">&quot;bookmark.urls&quot;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;admin/&quot;</span><span style="color:#E1E4E8;">, admin.site.urls),</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.contrib </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> admin</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> include, path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">urlpatterns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;bookmark/&quot;</span><span style="color:#24292E;">, include(</span><span style="color:#032F62;">&quot;bookmark.urls&quot;</span><span style="color:#24292E;">)),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;admin/&quot;</span><span style="color:#24292E;">, admin.site.urls),</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> . </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> views</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app_name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bookmark&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">urlpatterns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># http://127.0.0.1/bookmark/</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                 views.ListView.as_view(),   </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;add/&quot;</span><span style="color:#E1E4E8;">,             views.CreateView.as_view(), </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;add&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;detail/&lt;int:pk&gt;/&quot;</span><span style="color:#E1E4E8;">, views.DetailView.as_view(), </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;detail&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;update/&lt;int:pk&gt;/&quot;</span><span style="color:#E1E4E8;">, views.UpdateView.as_view(), </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;update&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;delete/&lt;int:pk&gt;/&quot;</span><span style="color:#E1E4E8;">, views.DeleteView.as_view(), </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;delete&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> path</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> . </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> views</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app_name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bookmark&quot;</span></span>
<span class="line"><span style="color:#24292E;">urlpatterns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># http://127.0.0.1/bookmark/</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                 views.ListView.as_view(),   </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;list&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;add/&quot;</span><span style="color:#24292E;">,             views.CreateView.as_view(), </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;add&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;detail/&lt;int:pk&gt;/&quot;</span><span style="color:#24292E;">, views.DetailView.as_view(), </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;detail&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;update/&lt;int:pk&gt;/&quot;</span><span style="color:#24292E;">, views.UpdateView.as_view(), </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;update&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;delete/&lt;int:pk&gt;/&quot;</span><span style="color:#24292E;">, views.DeleteView.as_view(), </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;delete&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div></div></div><h2 id="_5-3-5-tempate" tabindex="-1">5-3-5. Tempate <a class="header-anchor" href="#_5-3-5-tempate" aria-label="Permalink to &quot;5-3-5. Tempate&quot;">​</a></h2><p>이번 장에서는 하면 UI 에 해당하는 템플릿을 작성하겠습니다.</p><p>-- templates &gt; bookmark_list.html 작성</p><div class="console-block" id="console-block-5"><input class="c-tab-win" id="c-tab-5-win" type="radio" name="console-5" checked=""><label for="c-tab-5-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-5-unix" type="radio" name="console-5"><label for="c-tab-5-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-5-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\bookmark-project&gt; cd C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark&gt; cd 
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark&gt; mkdir templates
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark&gt; mkdir templates\\bookmark
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark&gt; cd templates\\bookmark
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark\\templates\\bookmark&gt; notepad bookmark_list.html
</pre></div></section><section class="c-content-unix" id="c-content-5-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/bookmark-project&gt; cd /home/hyungsik74/pycharm/bookmark-project/bookmark
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; pwd
/home/hyungsik74/pycharm/bookmark-project/bookmark
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; mkdir templates
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; mkdir templates/bookmark
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; cd templates/bookmark
$/home/hyungsik74/pycharm/bookmark-project/bookmark/templates/bookmark&gt; vi bookmark_list.html
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_o-hi" id="tab-d7ZeiPF" checked="checked"><label for="tab-d7ZeiPF">bookmark_list.html</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{% block title %}Bookmark List{% endblock %}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% block content %}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn-group&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{% url &#39;bookmark:add&#39; %}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn btn-info&quot;</span><span style="color:#E1E4E8;">&gt;Add Bookmark&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">table</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;table&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">thead</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">tr</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scope</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;col&quot;</span><span style="color:#E1E4E8;">&gt;#&lt;/</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scope</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;col&quot;</span><span style="color:#E1E4E8;">&gt;Site&lt;/</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scope</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;col&quot;</span><span style="color:#E1E4E8;">&gt;URL&lt;/</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scope</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;col&quot;</span><span style="color:#E1E4E8;">&gt;Modify&lt;/</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scope</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;col&quot;</span><span style="color:#E1E4E8;">&gt;Delete&lt;/</span><span style="color:#85E89D;">th</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">tr</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">thead</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">tbody</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {% for bookmark in object_list %}</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">tr</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;{{forloop.counter}}&lt;/</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{% url &#39;bookmark:detail&#39; pk=bookmark.id %}&quot;</span><span style="color:#E1E4E8;">&gt;{{bookmark.site_name}}&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{bookmark.url}}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">target</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;_blank&quot;</span><span style="color:#E1E4E8;">&gt;{{bookmark.url}}&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{% url &#39;bookmark:update&#39; pk=bookmark.id %}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn btn-success btn-sm&quot;</span><span style="color:#E1E4E8;">&gt;Modify&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{% url &#39;bookmark:delete&#39; pk=bookmark.id %}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn btn-danger btn-sm&quot;</span><span style="color:#E1E4E8;">&gt;Delete&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">td</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">tr</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {% endfor %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">tbody</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">table</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% endblock %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{% block title %}Bookmark List{% endblock %}</span></span>
<span class="line"><span style="color:#24292E;">{% block content %}</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn-group&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{% url &#39;bookmark:add&#39; %}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn btn-info&quot;</span><span style="color:#24292E;">&gt;Add Bookmark&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">table</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;table&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">thead</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">tr</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">th</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scope</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;col&quot;</span><span style="color:#24292E;">&gt;#&lt;/</span><span style="color:#22863A;">th</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">th</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scope</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;col&quot;</span><span style="color:#24292E;">&gt;Site&lt;/</span><span style="color:#22863A;">th</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">th</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scope</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;col&quot;</span><span style="color:#24292E;">&gt;URL&lt;/</span><span style="color:#22863A;">th</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">th</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scope</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;col&quot;</span><span style="color:#24292E;">&gt;Modify&lt;/</span><span style="color:#22863A;">th</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">th</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scope</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;col&quot;</span><span style="color:#24292E;">&gt;Delete&lt;/</span><span style="color:#22863A;">th</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">tr</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">thead</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">tbody</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        {% for bookmark in object_list %}</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">tr</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">td</span><span style="color:#24292E;">&gt;{{forloop.counter}}&lt;/</span><span style="color:#22863A;">td</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">td</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{% url &#39;bookmark:detail&#39; pk=bookmark.id %}&quot;</span><span style="color:#24292E;">&gt;{{bookmark.site_name}}&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">td</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">td</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{bookmark.url}}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">target</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;_blank&quot;</span><span style="color:#24292E;">&gt;{{bookmark.url}}&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">td</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">td</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{% url &#39;bookmark:update&#39; pk=bookmark.id %}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn btn-success btn-sm&quot;</span><span style="color:#24292E;">&gt;Modify&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">td</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">td</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{% url &#39;bookmark:delete&#39; pk=bookmark.id %}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn btn-danger btn-sm&quot;</span><span style="color:#24292E;">&gt;Delete&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">td</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">tr</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        {% endfor %}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">tbody</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">table</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% endblock %}</span></span></code></pre></div></div></div><p>-- templates &gt; bookmark_create.html 작성</p><div class="console-block" id="console-block-52"><input class="c-tab-win" id="c-tab-52-win" type="radio" name="console-52" checked=""><label for="c-tab-52-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-52-unix" type="radio" name="console-52"><label for="c-tab-52-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-52-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark&gt; cd templates\\bookmark
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark\\templates\\bookmark&gt; notepad bookmark_create.html
</pre></div></section><section class="c-content-unix" id="c-content-52-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; cd templates/bookmark
$/home/hyungsik74/pycharm/bookmark-project/bookmark/templates/bookmark&gt; vi bookmark_create.html
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-05oqQ" id="tab-dQFFZRc" checked="checked"><label for="tab-dQFFZRc">bookmark_create.html</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{% block title %}Bookmark Add{% endblock %}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% block content %}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">action</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;post&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {% csrf_token %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{form.as_p}}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;submit&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Add&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn btn-info btn-sm&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% endblock %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{% block title %}Bookmark Add{% endblock %}</span></span>
<span class="line"><span style="color:#24292E;">{% block content %}</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">form</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">action</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;post&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {% csrf_token %}</span></span>
<span class="line"><span style="color:#24292E;">    {{form.as_p}}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;submit&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Add&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn btn-info btn-sm&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">form</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% endblock %}</span></span></code></pre></div></div></div><p>-- templates &gt; bookmark_detail.html 작성</p><div class="console-block" id="console-block-53"><input class="c-tab-win" id="c-tab-53-win" type="radio" name="console-53" checked=""><label for="c-tab-53-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-53-unix" type="radio" name="console-53"><label for="c-tab-53-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-53-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark&gt; cd templates\\bookmark
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark\\templates\\bookmark&gt; notepad bookmark_detail.html
</pre></div></section><section class="c-content-unix" id="c-content-53-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; cd templates/bookmark
$/home/hyungsik74/pycharm/bookmark-project/bookmark/templates/bookmark&gt; vi bookmark_detail.html
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-otC9e" id="tab-F8IiJBp" checked="checked"><label for="tab-F8IiJBp">bookmark_detail.html</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{% block title %}Detail{% endblock %}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% block content %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{object.site_name}}&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{object.url}}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% endblock %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{% block title %}Detail{% endblock %}</span></span>
<span class="line"><span style="color:#24292E;">{% block content %}</span></span>
<span class="line"><span style="color:#24292E;">    {{object.site_name}}&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {{object.url}}</span></span>
<span class="line"><span style="color:#24292E;">{% endblock %}</span></span></code></pre></div></div></div><p>-- templates &gt; bookmark_update.html 작성</p><div class="console-block" id="console-block-54"><input class="c-tab-win" id="c-tab-54-win" type="radio" name="console-54" checked=""><label for="c-tab-54-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-54-unix" type="radio" name="console-54"><label for="c-tab-54-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-54-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark&gt; cd templates\\bookmark
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark\\templates\\bookmark&gt; notepad bookmark_update.html
</pre></div></section><section class="c-content-unix" id="c-content-54-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; cd templates/bookmark
$/home/hyungsik74/pycharm/bookmark-project/bookmark/templates/bookmark&gt; vi bookmark_update.html
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-mqMDh" id="tab-QIoFd7a" checked="checked"><label for="tab-QIoFd7a">bookmark_update.html</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{% block title %}Bookmark Add{% endblock %}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% block content %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">action</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{% url &#39;bookmark:update&#39; bookmark.id %}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;post&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {% csrf_token %}</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{form.as_p}}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- {{form}} --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;submit&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Update&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn btn-info btn-sm&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% endblock %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{% block title %}Bookmark Add{% endblock %}</span></span>
<span class="line"><span style="color:#24292E;">{% block content %}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">form</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">action</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{% url &#39;bookmark:update&#39; bookmark.id %}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;post&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        {% csrf_token %}</span></span>
<span class="line"><span style="color:#24292E;">        {{form.as_p}}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- {{form}} --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;submit&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Update&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn btn-info btn-sm&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">form</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% endblock %}</span></span></code></pre></div></div></div><p>-- templates &gt; bookmark_confirm_delete.html 작성</p><div class="console-block" id="console-block-55"><input class="c-tab-win" id="c-tab-55-win" type="radio" name="console-55" checked=""><label for="c-tab-55-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-55-unix" type="radio" name="console-55"><label for="c-tab-55-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-55-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark\\templates\\bookmark&gt; notepad bookmark_confirm_delete.html
</pre></div></section><section class="c-content-unix" id="c-content-55-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/bookmark-project/bookmark/templates/bookmark&gt; vi bookmark_confirm_delete.html
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group--EjNU" id="tab-WzCauoB" checked="checked"><label for="tab-WzCauoB">bookmark_confirm_delete.html</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{% block title %}Confirm Delete{% endblock %}</span></span>
<span class="line"><span style="color:#E1E4E8;">{% block content %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">action</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;post&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {%csrf_token%}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;aler alert-danger&quot;</span><span style="color:#E1E4E8;">&gt;Do you want to delete Bookmark &quot;{{object}}&quot;?&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;submit&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Delete&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btn btn-danger&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% endblock %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{% block title %}Confirm Delete{% endblock %}</span></span>
<span class="line"><span style="color:#24292E;">{% block content %}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">form</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">action</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;post&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        {%csrf_token%}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;aler alert-danger&quot;</span><span style="color:#24292E;">&gt;Do you want to delete Bookmark &quot;{{object}}&quot;?&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;submit&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Delete&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btn btn-danger&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">form</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% endblock %}</span></span></code></pre></div></div></div><h2 id="_5-3-6-view" tabindex="-1">5-3-6. View <a class="header-anchor" href="#_5-3-6-view" aria-label="Permalink to &quot;5-3-6. View&quot;">​</a></h2><p>뷰는 bookmark/views.py 파일에서 아래의 5개 class 뷰로 작성합니다.</p><ul><li>ListView</li><li>CreateView</li><li>DetailView</li><li>UpdateView</li><li>DeleteView</li></ul><div class="console-block" id="console-block-6"><input class="c-tab-win" id="c-tab-6-win" type="radio" name="console-6" checked=""><label for="c-tab-6-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-6-unix" type="radio" name="console-6"><label for="c-tab-6-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-6-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\bookmark-project\\&gt; cd C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark&gt; cd 
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark
C:\\hyungsik74\\pycharm\\bookmark-project\\bookmark&gt; notepad views.py
</pre></div></section><section class="c-content-unix" id="c-content-6-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/bookmark-project&gt; cd /home/hyungsik74/pycharm/bookmark-project/bookmark
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; pwd
/home/hyungsik74/pycharm/bookmark-project/bookmark
$/home/hyungsik74/pycharm/bookmark-project/bookmark&gt; vi views.py
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Zo70h" id="tab-eG0V7-A" checked="checked"><label for="tab-eG0V7-A">#ListView</label><input type="radio" name="group-Zo70h" id="tab-sTvklJ-"><label for="tab-sTvklJ-">#CreateView</label><input type="radio" name="group-Zo70h" id="tab-JMI5rId"><label for="tab-JMI5rId">#DetailView</label><input type="radio" name="group-Zo70h" id="tab-yg6m7Ff"><label for="tab-yg6m7Ff">UpdateView</label><input type="radio" name="group-Zo70h" id="tab-Ptdge8J"><label for="tab-Ptdge8J">DeleteView</label><input type="radio" name="group-Zo70h" id="tab-NGDzh_z"><label for="tab-NGDzh_z">views.py</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.views </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> generic</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> reverse_lazy</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ListView</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">generic</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ListView</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Bookmark</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.views </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> generic</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> reverse_lazy</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ListView</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">generic</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">ListView</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    model </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Bookmark</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.views </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> generic</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> reverse_lazy</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CreateView</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">generic</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">CreateView</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"><span style="color:#E1E4E8;">    fields </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;site_name&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;url&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    success_url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> reverse_lazy(</span><span style="color:#9ECBFF;">&#39;bookmark:list&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    template_name_suffix </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_create&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.views </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> generic</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> reverse_lazy</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CreateView</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">generic</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">CreateView</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    model </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"><span style="color:#24292E;">    fields </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;site_name&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;url&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    success_url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> reverse_lazy(</span><span style="color:#032F62;">&#39;bookmark:list&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    template_name_suffix </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_create&#39;</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.views </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> generic</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> reverse_lazy</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DetailView</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">generic</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DetailView</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"><span style="color:#E1E4E8;">    template_name_suffix </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_detail&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.views </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> generic</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> reverse_lazy</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DetailView</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">generic</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DetailView</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    model </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"><span style="color:#24292E;">    template_name_suffix </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_detail&#39;</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.views </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> generic</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> reverse_lazy</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UpdateView</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">generic</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">UpdateView</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"><span style="color:#E1E4E8;">    fields </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;site_name&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;url&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    template_name_suffix </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_update&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.views </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> generic</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> reverse_lazy</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UpdateView</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">generic</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">UpdateView</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    model </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"><span style="color:#24292E;">    fields </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;site_name&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;url&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    template_name_suffix </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_update&#39;</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.views </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> generic</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> reverse_lazy</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DeleteView</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">generic</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DeleteView</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"><span style="color:#E1E4E8;">    success_url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> reverse_lazy(</span><span style="color:#9ECBFF;">&#39;bookmark:list&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.views </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> generic</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> reverse_lazy</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DeleteView</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">generic</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DeleteView</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    model </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"><span style="color:#24292E;">    success_url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> reverse_lazy(</span><span style="color:#032F62;">&#39;bookmark:list&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Create your views here.</span></span>
<span class="line"><span style="color:#6A737D;"># CRUD : Create, Read, Update, Delete</span></span>
<span class="line"><span style="color:#6A737D;"># List</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 클래스형 뷰, 함수형 뷰</span></span>
<span class="line"><span style="color:#6A737D;"># 웹 페이지에 접속한다. -&gt; 페이지를 본다.</span></span>
<span class="line"><span style="color:#6A737D;"># URL을 입력 -&gt; 웹 서버가 뷰를 찾아서 동작시킨다. -&gt; 응답</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.views </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> generic</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> reverse_lazy</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ListView</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">generic</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ListView</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CreateView</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">generic</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">CreateView</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"><span style="color:#E1E4E8;">    fields </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;site_name&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;url&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    success_url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> reverse_lazy(</span><span style="color:#9ECBFF;">&#39;bookmark:list&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    template_name_suffix </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_create&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DetailView</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">generic</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DetailView</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"><span style="color:#E1E4E8;">    template_name_suffix </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_detail&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UpdateView</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">generic</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">UpdateView</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"><span style="color:#E1E4E8;">    fields </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;site_name&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;url&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    template_name_suffix </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_update&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DeleteView</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">generic</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DeleteView</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Bookmark</span></span>
<span class="line"><span style="color:#E1E4E8;">    success_url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> reverse_lazy(</span><span style="color:#9ECBFF;">&#39;bookmark:list&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Create your views here.</span></span>
<span class="line"><span style="color:#6A737D;"># CRUD : Create, Read, Update, Delete</span></span>
<span class="line"><span style="color:#6A737D;"># List</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 클래스형 뷰, 함수형 뷰</span></span>
<span class="line"><span style="color:#6A737D;"># 웹 페이지에 접속한다. -&gt; 페이지를 본다.</span></span>
<span class="line"><span style="color:#6A737D;"># URL을 입력 -&gt; 웹 서버가 뷰를 찾아서 동작시킨다. -&gt; 응답</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.views </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> generic</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> reverse_lazy</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ListView</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">generic</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">ListView</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    model </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CreateView</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">generic</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">CreateView</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    model </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"><span style="color:#24292E;">    fields </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;site_name&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;url&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    success_url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> reverse_lazy(</span><span style="color:#032F62;">&#39;bookmark:list&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    template_name_suffix </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_create&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DetailView</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">generic</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DetailView</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    model </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"><span style="color:#24292E;">    template_name_suffix </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_detail&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UpdateView</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">generic</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">UpdateView</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    model </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"><span style="color:#24292E;">    fields </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;site_name&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;url&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    template_name_suffix </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_update&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DeleteView</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">generic</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DeleteView</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    model </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Bookmark</span></span>
<span class="line"><span style="color:#24292E;">    success_url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> reverse_lazy(</span><span style="color:#032F62;">&#39;bookmark:list&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div></div></div><h2 id="_5-3-7-실행하기" tabindex="-1">5-3-7. 실행하기 <a class="header-anchor" href="#_5-3-7-실행하기" aria-label="Permalink to &quot;5-3-7. 실행하기&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>장고 웹 프레임워크를 사용해서 프로젝트를 처음 생성할 때 마다 반듯이 필요한 절차 이므로 꼭 이해하고, 익숙해져야 합니다.</p></div><div class="console-block" id="console-block-7"><input class="c-tab-win" id="c-tab-7-win" type="radio" name="console-7" checked=""><label for="c-tab-7-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-7-unix" type="radio" name="console-7"><label for="c-tab-7-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-7-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\bookmark-project&gt; cd C:\\hyungsik74\\pycharm\\bookmark-project
C:\\hyungsik74\\pycharm\\bookmark-project&gt; cd 
C:\\hyungsik74\\pycharm\\bookmark-project
C:\\hyungsik74\\pycharm\\bookmark-project&gt; py manage.py runserver
</pre></div></section><section class="c-content-unix" id="c-content-7-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/bookmark-project&gt; cd /home/hyungsik74/pycharm/bookmark-project
$/home/hyungsik74/pycharm/bookmark-project&gt; pwd
/home/hyungsik74/pycharm/bookmark-project
$/home/hyungsik74/pycharm/bookmark-project&gt; python manage.py runserver
</pre></div></div></section></div><ul><li>브라우저에서 <a href="http://127.0.0.1:8000/bookmark" target="_blank" rel="noreferrer">http://127.0.0.1:8000/bookmark</a> 접속합니다.</li></ul><p><img src="`+e+'" alt="ch05-03-07_01.png"> 그림5-3-7. 사용자 어플리케이션 초기 화면</p>',55),r=[c];function i(y,E,m,d,k,g){return n(),l("div",null,r)}const F=a(t,[["render",i]]);export{u as __pageData,F as default};
