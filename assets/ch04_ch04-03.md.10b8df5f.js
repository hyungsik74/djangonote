import{_ as s}from"./chunks/ch04-03-03_01.7683f662.js";import{_ as n,o as a,c as l,Q as p}from"./chunks/framework.4976f53a.js";const o="/djangonote/assets/ch04-03_01.fdc4c7ca.png",e="/djangonote/assets/ch04-03-07_01.20b832c7.png",q=JSON.parse('{"title":"4-3. 사용자 어플리케이션 작성","description":"","frontmatter":{},"headers":[],"relativePath":"ch04/ch04-03.md","filePath":"ch04/ch04-03.md"}'),t={name:"ch04/ch04-03.md"},c=p('<link rel="stylesheet" href="../css/style.css"><h1 id="_4-3-사용자-어플리케이션-작성" tabindex="-1">4-3. 사용자 어플리케이션 작성 <a class="header-anchor" href="#_4-3-사용자-어플리케이션-작성" aria-label="Permalink to &quot;4-3. 사용자 어플리케이션 작성&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">startapp polls</p><p>이전 장에서 Polls 어플리케이션을 설계할 때 3개의 화면 페이지가 필요했습니다. 이 3개의 페이지에 대해서 필요한 뷰 와 템플릿을 작성하겠습니다. 화면을 작성하기 위해서 처리흐름에 대한 로직이 설계되어야 합니다. 여기서는 4개의 URL와 뷰와 3개의 템플릿 파일이 필요합니다.</p></div><p><img src="'+o+`" alt="ch04-03_01.png"> 그림4-3. URL 구성</p><h2 id="_4-3-1-url-설계" tabindex="-1">4-3-1. URL 설계 <a class="header-anchor" href="#_4-3-1-url-설계" aria-label="Permalink to &quot;4-3-1. URL 설계&quot;">​</a></h2><p>다음은 요청 URL 과 장고 View를 매핑한 리스트입니다. 각 뷰에서 처리하는 내용을 잘 이해해야 합니다.</p><table><thead><tr><th>URL 패턴</th><th style="text-align:left;">뷰 이름</th><th style="text-align:left;">뷰가 처리하는 내용</th></tr></thead><tbody><tr><td>/polls/</td><td style="text-align:left;">index()</td><td style="text-align:left;">index.html 템플릿을 보여 줍니다.</td></tr><tr><td>/polls/1/</td><td style="text-align:left;">detail()</td><td style="text-align:left;">detail.html 템플릿을 보여 줍니다.</td></tr><tr><td>/polls/1/vote</td><td style="text-align:left;">vote()</td><td style="text-align:left;">detail.html의 폼을 POST 방식으로 처리합니다.</td></tr><tr><td>/polls/1/results</td><td style="text-align:left;">results()</td><td style="text-align:left;">results.html 템플릿을 보여 줍니다.</td></tr><tr><td>/admin/</td><td style="text-align:left;">(기본제공)</td><td style="text-align:left;">관리자 사이트를 보여 줍니다. (장고제공)</td></tr></tbody></table><h2 id="_4-3-2-어플리케이션-생성" tabindex="-1">4-3-2. 어플리케이션 생성 <a class="header-anchor" href="#_4-3-2-어플리케이션-생성" aria-label="Permalink to &quot;4-3-2. 어플리케이션 생성&quot;">​</a></h2><p>다음은 파이썬 startapp 명령어로 어플리케이션을 생성하도록 하겠습니다. polls라는 어플리케이션 명을 입력합니다.</p><div class="console-block" id="console-block-2"><input class="c-tab-win" id="c-tab-2-win" type="radio" name="console-2" checked=""><label for="c-tab-2-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-2-unix" type="radio" name="console-2"><label for="c-tab-2-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-2-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\&gt; cd polls-project
C:\\hyungsik74\\pycharm\\polls-project&gt; cd 
C:\\hyungsik74\\pycharm\\polls-project
C:\\hyungsik74\\pycharm\\polls-project&gt; py manage.py startapp polls
</pre></div></section><section class="c-content-unix" id="c-content-2-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command 
$/home/hyungsik74/pycharm&gt; cd polls-project
$/home/hyungsik74/pycharm/polls-project&gt; pwd
/home/hyungsik74/pycharm/polls-project
$/home/hyungsik74/pycharm/polls-project&gt; python manage.py startapp polls 
</pre></div></div></section></div><p>어플리케이션 생성후 디렉토리 구조입니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">hyungsik74</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ pycharm</span></span>
<span class="line"><span style="color:#e1e4e8;">  └─ polls-project</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─ config</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ asgi.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ settings.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ urls.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  └─ wsgi.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─ polls</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ migrations</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  |  └─ 0001_initial.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ templates</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  |  ├─ polls</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  │  |  ├─ detail.html</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  │  |  ├─ index.html</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  │  |  └─ results.html</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ admin.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ apps.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ models.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ tests.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  ├─ urls.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    |  └─ views.py</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─ db.sqlite3</span></span>
<span class="line"><span style="color:#e1e4e8;">    └─ manage.py</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">hyungsik74</span></span>
<span class="line"><span style="color:#24292e;">└─ pycharm</span></span>
<span class="line"><span style="color:#24292e;">  └─ polls-project</span></span>
<span class="line"><span style="color:#24292e;">    ├─ config</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ asgi.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ settings.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ urls.py</span></span>
<span class="line"><span style="color:#24292e;">    |  └─ wsgi.py</span></span>
<span class="line"><span style="color:#24292e;">    ├─ polls</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ migrations</span></span>
<span class="line"><span style="color:#24292e;">    │  |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#24292e;">    │  |  └─ 0001_initial.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ templates</span></span>
<span class="line"><span style="color:#24292e;">    │  |  ├─ polls</span></span>
<span class="line"><span style="color:#24292e;">    |  │  |  ├─ detail.html</span></span>
<span class="line"><span style="color:#24292e;">    |  │  |  ├─ index.html</span></span>
<span class="line"><span style="color:#24292e;">    |  │  |  └─ results.html</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ __init__.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ admin.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ apps.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ models.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ tests.py</span></span>
<span class="line"><span style="color:#24292e;">    |  ├─ urls.py</span></span>
<span class="line"><span style="color:#24292e;">    |  └─ views.py</span></span>
<span class="line"><span style="color:#24292e;">    ├─ db.sqlite3</span></span>
<span class="line"><span style="color:#24292e;">    └─ manage.py</span></span></code></pre></div><h3 id="프로젝트-설정-파일-settings-py-추가" tabindex="-1">프로젝트 설정 파일(settings.py) 추가 <a class="header-anchor" href="#프로젝트-설정-파일-settings-py-추가" aria-label="Permalink to &quot;프로젝트 설정 파일(settings.py) 추가&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group--xoHS" id="tab-HeyQfBL" checked="checked"><label for="tab-HeyQfBL">/config/settings.py</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Application definition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">INSTALLED_APPS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;polls.apps.PollsConfig&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;"># 추가\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.admin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.auth&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.contenttypes&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.sessions&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.messages&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.staticfiles&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Application definition</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">INSTALLED_APPS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;polls.apps.PollsConfig&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;"># 추가\`</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.admin&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.auth&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.contenttypes&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.sessions&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.messages&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.staticfiles&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div></div></div><h2 id="_4-3-3-설문조사-데이터모델-생성" tabindex="-1">4-3-3. 설문조사 데이터모델 생성 <a class="header-anchor" href="#_4-3-3-설문조사-데이터모델-생성" aria-label="Permalink to &quot;4-3-3. 설문조사 데이터모델 생성&quot;">​</a></h2><p>데이터모델 생성은 장고 프레임웍에서 데이터베이스 관련 테이블 등을 생성을 하는 단계입니다. 다음의 순서대로 생성합니다.</p><div class="console-block" id="console-block-3"><input class="c-tab-win" id="c-tab-3-win" type="radio" name="console-3" checked=""><label for="c-tab-3-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-3-unix" type="radio" name="console-3"><label for="c-tab-3-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-3-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\polls-project&gt; cd polls
C:\\hyungsik74\\pycharm\\polls-projectpolls&gt; cd 
C:\\hyungsik74\\pycharm\\polls-projectpolls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; notepad models.py   // 테이블을 정의함
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; notepad admin.py   // 관리자화면에 표시
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; cd ..
C:\\hyungsik74\\pycharm\\polls-project
C:\\hyungsik74\\pycharm\\polls-project&gt; py manage.py makemigrations polls  // DB 변경사항
C:\\hyungsik74\\pycharm\\polls-project&gt; py manage.py sqlmigrate polls 0001
<p>C:\\hyungsik74\\pycharm\\polls-project&gt; py manage.py migrate   // DB 변경사항 반영
C:\\hyungsik74\\pycharm\\polls-project&gt; py manage.py runserver   // 실행</p>
</pre></div></section><section class="c-content-unix" id="c-content-3-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/polls-project&gt; cd polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; pwd
/home/hyungsik74/pycharm/polls-project/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; vi models.py
$/home/hyungsik74/pycharm/polls-project/polls&gt; vi admin.py
$/home/hyungsik74/pycharm/polls-project/polls&gt; cd ..
$/home/hyungsik74/pycharm/polls-project&gt; pwd
/home/hyungsik74/pycharm/polls-project
$/home/hyungsik74/pycharm/polls-project&gt; python manage.py makemigrations polls
$/home/hyungsik74/pycharm/polls-project&gt; python manage.py migrate
$/home/hyungsik74/pycharm/polls-project&gt; python manage.py runserver
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-obFaA" id="tab-xSFDSlQ" checked="checked"><label for="tab-xSFDSlQ">models.py</label><input type="radio" name="group-obFaA" id="tab-F14EvdD"><label for="tab-F14EvdD">admins.py</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.db </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> models</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Question</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">models</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Model</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question_text </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.CharField(</span><span style="color:#FFAB70;">max_length</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    pub_date </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.DateTimeField(</span><span style="color:#9ECBFF;">&quot;date published&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__str__</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.question_text</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Choice</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">models</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Model</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.ForeignKey(Question, </span><span style="color:#FFAB70;">on_delete</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">models.</span><span style="color:#79B8FF;">CASCADE</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    choice_text </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.CharField(</span><span style="color:#FFAB70;">max_length</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    votes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> models.IntegerField(</span><span style="color:#FFAB70;">default</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__str__</span><span style="color:#E1E4E8;">(self):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.choice_text</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.db </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> models</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Question</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">models</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Model</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    question_text </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.CharField(</span><span style="color:#E36209;">max_length</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    pub_date </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.DateTimeField(</span><span style="color:#032F62;">&quot;date published&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__str__</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.question_text</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Choice</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">models</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Model</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.ForeignKey(Question, </span><span style="color:#E36209;">on_delete</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">models.</span><span style="color:#005CC5;">CASCADE</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    choice_text </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.CharField(</span><span style="color:#E36209;">max_length</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    votes </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> models.IntegerField(</span><span style="color:#E36209;">default</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__str__</span><span style="color:#24292E;">(self):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.choice_text</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.contrib </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Question, Choice</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">admin.site.register(Question)</span></span>
<span class="line"><span style="color:#E1E4E8;">admin.site.register(Choice)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.contrib </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Question, Choice</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">admin.site.register(Question)</span></span>
<span class="line"><span style="color:#24292E;">admin.site.register(Choice)</span></span></code></pre></div></div></div><p>지금까지 작성한 내용을 확인하기 위해서, 프로젝트를 실행합니다. 관리자 페이지에 접속하면, 다음과 같이 새로 생성한 2개의 테이블을 확인 할 수 있습니다.</p><p>*Admin (<a href="http://127.0.0.1:8000/admin" target="_blank" rel="noreferrer">http://127.0.0.1:8000/admin</a>) 사이트 로그인 후 첫 페이지</p><p><img src="`+s+`" alt="ch04-03-03_01.png"> 그림4-03-01. 관리자 Polls 테이블 생성 화면</p><h2 id="_4-3-4-url-config" tabindex="-1">4-3-4. URL Config <a class="header-anchor" href="#_4-3-4-url-config" aria-label="Permalink to &quot;4-3-4. URL Config&quot;">​</a></h2><p>이전 장에서 처리 흐름에 따라 URL 및 View를 설계했습니다. URL config라 함은 이런 URL 과 뷰를 연결해 주는 작업입니다. 관리자 페이지를 포함해서 5개의 URL 과 뷰가 필요합니다.</p><div class="console-block" id="console-block-4"><input class="c-tab-win" id="c-tab-4-win" type="radio" name="console-4" checked=""><label for="c-tab-4-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-4-unix" type="radio" name="console-4"><label for="c-tab-4-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-4-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\polls-project\\config&gt; cd 
C:\\hyungsik74\\pycharm\\polls-project\\config
C:\\hyungsik74\\pycharm\\polls-project\\config&gt; notepad urls.py
C:\\hyungsik74\\pycharm\\polls-project\\config&gt; cd ..\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; cd
C:\\hyungsik74\\pycharm\\polls-project\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; notepad urls.py
</pre></div></section><section class="c-content-unix" id="c-content-4-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/polls-project&gt; cd /home/hyungsik74/pycharm/polls-project/config
$/home/hyungsik74/pycharm/polls-project/confing&gt; pwd
/home/hyungsik74/pycharm/polls-project/config
$/home/hyungsik74/pycharm/polls-project/config&gt; vi urls.py
$/home/hyungsik74/pycharm/polls-project&gt; cd /home/hyungsik74/pycharm/polls-project/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; pwd
/home/hyungsik74/pycharm/polls-project/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; vi urls.py
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ndfh4" id="tab-nh0FeqY" checked="checked"><label for="tab-nh0FeqY">config/urls.py</label><input type="radio" name="group-ndfh4" id="tab-U3YOpBm"><label for="tab-U3YOpBm">polls/urls.py</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.contrib </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> admin</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> include, path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">urlpatterns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;polls/&quot;</span><span style="color:#E1E4E8;">, include(</span><span style="color:#9ECBFF;">&quot;polls.urls&quot;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;admin/&quot;</span><span style="color:#E1E4E8;">, admin.site.urls),</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.contrib </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> admin</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> include, path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">urlpatterns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;polls/&quot;</span><span style="color:#24292E;">, include(</span><span style="color:#032F62;">&quot;polls.urls&quot;</span><span style="color:#24292E;">)),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;admin/&quot;</span><span style="color:#24292E;">, admin.site.urls),</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> . </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> views</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app_name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;polls&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">urlpatterns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, views.index, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;index&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;&lt;int:question_id&gt;/&quot;</span><span style="color:#E1E4E8;">, views.detail, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;detail&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;&lt;int:question_id&gt;/results/&quot;</span><span style="color:#E1E4E8;">, views.results, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;results&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;&lt;int:question_id&gt;/vote/&quot;</span><span style="color:#E1E4E8;">, views.vote, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;vote&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> . </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> views</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app_name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;polls&quot;</span></span>
<span class="line"><span style="color:#24292E;">urlpatterns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, views.index, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;index&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;&lt;int:question_id&gt;/&quot;</span><span style="color:#24292E;">, views.detail, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;detail&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;&lt;int:question_id&gt;/results/&quot;</span><span style="color:#24292E;">, views.results, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;results&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;&lt;int:question_id&gt;/vote/&quot;</span><span style="color:#24292E;">, views.vote, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;vote&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div></div></div><h2 id="_4-3-5-tempate" tabindex="-1">4-3-5. Tempate <a class="header-anchor" href="#_4-3-5-tempate" aria-label="Permalink to &quot;4-3-5. Tempate&quot;">​</a></h2><p>이번 장에서는 하면 UI 에 해당하는 템플릿을 작성하겠습니다.</p><div class="console-block" id="console-block-5"><input class="c-tab-win" id="c-tab-5-win" type="radio" name="console-5" checked=""><label for="c-tab-5-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-5-unix" type="radio" name="console-5"><label for="c-tab-5-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-5-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\polls-project&gt; cd C:\\hyungsik74\\pycharm\\polls-project\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; cd 
C:\\hyungsik74\\pycharm\\polls-project\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; mkdir templates
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; mkdir templates\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; cd templates\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls\\templates\\polls&gt; notepad index.html
</pre></div></section><section class="c-content-unix" id="c-content-5-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/polls-project&gt; cd /home/hyungsik74/pycharm/polls-project/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; pwd
/home/hyungsik74/pycharm/polls-project/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; mkdir templates
$/home/hyungsik74/pycharm/polls-project/polls&gt; mkdir templates/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; cd templates/polls
$/home/hyungsik74/pycharm/polls-project/polls/templates/polls&gt; vi index.html
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wyEl8" id="tab-dNiHBew" checked="checked"><label for="tab-dNiHBew">index.html</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{% if latest_question_list %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {% for question in latest_question_list %}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/polls/{{ question.id }}/&quot;</span><span style="color:#E1E4E8;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {% endfor %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% else %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;No polls are available.&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% endif %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{% if latest_question_list %}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {% for question in latest_question_list %}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/polls/{{ question.id }}/&quot;</span><span style="color:#24292E;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {% endfor %}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% else %}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;No polls are available.&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% endif %}</span></span></code></pre></div></div></div><div class="console-block" id="console-block-52"><input class="c-tab-win" id="c-tab-52-win" type="radio" name="console-52" checked=""><label for="c-tab-52-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-52-unix" type="radio" name="console-52"><label for="c-tab-52-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-52-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\polls-project&gt; cd C:\\hyungsik74\\pycharm\\polls-project\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; cd 
C:\\hyungsik74\\pycharm\\polls-project\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; mkdir templates
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; mkdir templates\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; cd templates\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls\\templates\\polls&gt; notepad index.html
</pre></div></section><section class="c-content-unix" id="c-content-52-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/polls-project&gt; cd /home/hyungsik74/pycharm/polls-project/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; pwd
/home/hyungsik74/pycharm/polls-project/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; mkdir templates
$/home/hyungsik74/pycharm/polls-project/polls&gt; mkdir templates/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; cd templates/polls
$/home/hyungsik74/pycharm/polls-project/polls/templates/polls&gt; vi index.html
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Bo08z" id="tab-aZ7r9pU" checked="checked"><label for="tab-aZ7r9pU">detail.html</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#6A737D;">{% for choice in question.choice_set.all %}</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;li&gt;{{ choice.choice_text }}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#6A737D;">{% endfor %}</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#6A737D;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">action</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{% url &#39;polls:vote&#39; question.id %}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;post&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% csrf_token %}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">fieldset</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">legend</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">legend</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {% if error_message %}&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">strong</span><span style="color:#E1E4E8;">&gt;{{ error_message }}&lt;/</span><span style="color:#85E89D;">strong</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;{% endif %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    {% for choice in question.choice_set.all %}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;radio&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;choice&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;choice{{ forloop.counter }}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{ choice.id }}&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;choice{{ forloop.counter }}&quot;</span><span style="color:#E1E4E8;">&gt;{{ choice.choice_text }}&lt;/</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {% endfor %}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">fieldset</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;submit&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Vote&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#6A737D;">{% for choice in question.choice_set.all %}</span></span>
<span class="line"><span style="color:#6A737D;">    &lt;li&gt;{{ choice.choice_text }}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#6A737D;">{% endfor %}</span></span>
<span class="line"><span style="color:#6A737D;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#6A737D;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">form</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">action</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{% url &#39;polls:vote&#39; question.id %}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;post&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% csrf_token %}</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">fieldset</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">legend</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">legend</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {% if error_message %}&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">strong</span><span style="color:#24292E;">&gt;{{ error_message }}&lt;/</span><span style="color:#22863A;">strong</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;{% endif %}</span></span>
<span class="line"><span style="color:#24292E;">    {% for choice in question.choice_set.all %}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;radio&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;choice&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;choice{{ forloop.counter }}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{ choice.id }}&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">label</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;choice{{ forloop.counter }}&quot;</span><span style="color:#24292E;">&gt;{{ choice.choice_text }}&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {% endfor %}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">fieldset</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;submit&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Vote&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">form</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></div></div><div class="console-block" id="console-block-53"><input class="c-tab-win" id="c-tab-53-win" type="radio" name="console-53" checked=""><label for="c-tab-53-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-53-unix" type="radio" name="console-53"><label for="c-tab-53-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-53-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\polls-project&gt; cd C:\\hyungsik74\\pycharm\\polls-project\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; cd 
C:\\hyungsik74\\pycharm\\polls-project\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; mkdir templates
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; mkdir templates\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; cd templates\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls\\templates\\polls&gt; notepad index.html
</pre></div></section><section class="c-content-unix" id="c-content-53-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/polls-project&gt; cd /home/hyungsik74/pycharm/polls-project/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; pwd
/home/hyungsik74/pycharm/polls-project/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; mkdir templates
$/home/hyungsik74/pycharm/polls-project/polls&gt; mkdir templates/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; cd templates/polls
$/home/hyungsik74/pycharm/polls-project/polls/templates/polls&gt; vi index.html
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Z4FmO" id="tab-pmhIjgc" checked="checked"><label for="tab-pmhIjgc">results.html</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% for choice in question.choice_set.all %}</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;{{ choice.choice_text }} -- {{ choice.votes }} vote{{ choice.votes|pluralize }}&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{% endfor %}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{% url &#39;polls:detail&#39; question.id %}&quot;</span><span style="color:#E1E4E8;">&gt;Vote again?&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;{{ question.question_text }}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% for choice in question.choice_set.all %}</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;{{ choice.choice_text }} -- {{ choice.votes }} vote{{ choice.votes|pluralize }}&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{% endfor %}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{% url &#39;polls:detail&#39; question.id %}&quot;</span><span style="color:#24292E;">&gt;Vote again?&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></div></div><h2 id="_4-3-6-view" tabindex="-1">4-3-6. View <a class="header-anchor" href="#_4-3-6-view" aria-label="Permalink to &quot;4-3-6. View&quot;">​</a></h2><p>뷰는 polls/views.py 파일에서 아래의 4개 function 에 대해서 작성해야 합니다.</p><ul><li>index</li><li>detail</li><li>vote</li><li>results</li></ul><div class="console-block" id="console-block-6"><input class="c-tab-win" id="c-tab-6-win" type="radio" name="console-6" checked=""><label for="c-tab-6-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-6-unix" type="radio" name="console-6"><label for="c-tab-6-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-6-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\polls-project\\&gt; cd C:\\hyungsik74\\pycharm\\polls-project\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; cd 
C:\\hyungsik74\\pycharm\\polls-project\\polls
C:\\hyungsik74\\pycharm\\polls-project\\polls&gt; notepad views.py
</pre></div></section><section class="c-content-unix" id="c-content-6-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/polls-project&gt; cd /home/hyungsik74/pycharm/polls-project/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; pwd
/home/hyungsik74/pycharm/polls-project/polls
$/home/hyungsik74/pycharm/polls-project/polls&gt; vi views.py
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ymDew" id="tab-hwPI1NA" checked="checked"><label for="tab-hwPI1NA">#index</label><input type="radio" name="group-ymDew" id="tab-040iwY1"><label for="tab-040iwY1">#detail</label><input type="radio" name="group-ymDew" id="tab-pLRwotn"><label for="tab-pLRwotn">#vote</label><input type="radio" name="group-ymDew" id="tab-UcXe546"><label for="tab-UcXe546">#results</label><input type="radio" name="group-ymDew" id="tab-nFhlR_Y"><label for="tab-nFhlR_Y">views.py#all</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.shortcuts </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> render</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Question</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    latest_question_list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Question.objects.order_by(</span><span style="color:#9ECBFF;">&quot;-pub_date&quot;</span><span style="color:#E1E4E8;">)[:</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    context </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&quot;latest_question_list&quot;</span><span style="color:#E1E4E8;">: latest_question_list}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&quot;polls/index.html&quot;</span><span style="color:#E1E4E8;">, context)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.shortcuts </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> render</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Question</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    latest_question_list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Question.objects.order_by(</span><span style="color:#032F62;">&quot;-pub_date&quot;</span><span style="color:#24292E;">)[:</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    context </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">&quot;latest_question_list&quot;</span><span style="color:#24292E;">: latest_question_list}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&quot;polls/index.html&quot;</span><span style="color:#24292E;">, context)</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.shortcuts </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> get_object_or_404, render</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Question</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">detail</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_object_or_404(Question, </span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">question_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&quot;polls/detail.html&quot;</span><span style="color:#E1E4E8;">, {</span><span style="color:#9ECBFF;">&quot;question&quot;</span><span style="color:#E1E4E8;">: question})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.shortcuts </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> get_object_or_404, render</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Question</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">detail</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_object_or_404(Question, </span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">question_id)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&quot;polls/detail.html&quot;</span><span style="color:#24292E;">, {</span><span style="color:#032F62;">&quot;question&quot;</span><span style="color:#24292E;">: question})</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.http </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> HttpResponse, HttpResponseRedirect</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.shortcuts </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> get_object_or_404, render</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> reverse</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Choice, Question</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">vote</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_object_or_404(Question, </span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">question_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        selected_choice </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> question.choice_set.get(</span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">request.</span><span style="color:#79B8FF;">POST</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&quot;choice&quot;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">except</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">KeyError</span><span style="color:#E1E4E8;">, Choice.DoesNotExist):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># Redisplay the question voting form.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(</span></span>
<span class="line"><span style="color:#E1E4E8;">            request,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;polls/detail.html&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;question&quot;</span><span style="color:#E1E4E8;">: question,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;error_message&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;You didn&#39;t select a choice.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        selected_choice.votes </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        selected_choice.save()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># Always return an HttpResponseRedirect after successfully dealing</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># with POST data. This prevents data from being posted twice if a</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># user hits the Back button.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> HttpResponseRedirect(reverse(</span><span style="color:#9ECBFF;">&quot;polls:results&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(question.id,)))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.http </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> HttpResponse, HttpResponseRedirect</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.shortcuts </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> get_object_or_404, render</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> reverse</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Choice, Question</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">vote</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_object_or_404(Question, </span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">question_id)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        selected_choice </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> question.choice_set.get(</span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">request.</span><span style="color:#005CC5;">POST</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&quot;choice&quot;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">except</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">KeyError</span><span style="color:#24292E;">, Choice.DoesNotExist):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># Redisplay the question voting form.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(</span></span>
<span class="line"><span style="color:#24292E;">            request,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;polls/detail.html&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;question&quot;</span><span style="color:#24292E;">: question,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;error_message&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;You didn&#39;t select a choice.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        )</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        selected_choice.votes </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        selected_choice.save()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># Always return an HttpResponseRedirect after successfully dealing</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># with POST data. This prevents data from being posted twice if a</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># user hits the Back button.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> HttpResponseRedirect(reverse(</span><span style="color:#032F62;">&quot;polls:results&quot;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">args</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(question.id,)))</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.shortcuts </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> get_object_or_404, render</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">results</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_object_or_404(Question, </span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">question_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&quot;polls/results.html&quot;</span><span style="color:#E1E4E8;">, {</span><span style="color:#9ECBFF;">&quot;question&quot;</span><span style="color:#E1E4E8;">: question})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.shortcuts </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> get_object_or_404, render</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">results</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_object_or_404(Question, </span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">question_id)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&quot;polls/results.html&quot;</span><span style="color:#24292E;">, {</span><span style="color:#032F62;">&quot;question&quot;</span><span style="color:#24292E;">: question})</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.http </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> HttpResponse, HttpResponseRedirect</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.shortcuts </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> render</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> reverse</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.shortcuts </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> get_object_or_404, render</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> .models </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Question, Choice</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    latest_question_list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Question.objects.order_by(</span><span style="color:#9ECBFF;">&quot;-pub_date&quot;</span><span style="color:#E1E4E8;">)[:</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    context </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&quot;latest_question_list&quot;</span><span style="color:#E1E4E8;">: latest_question_list}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&quot;polls/index.html&quot;</span><span style="color:#E1E4E8;">, context)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">detail</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_object_or_404(Question, </span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">question_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&quot;polls/detail.html&quot;</span><span style="color:#E1E4E8;">, {</span><span style="color:#9ECBFF;">&quot;question&quot;</span><span style="color:#E1E4E8;">: question})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">vote</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_object_or_404(Question, </span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">question_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        selected_choice </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> question.choice_set.get(</span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">request.</span><span style="color:#79B8FF;">POST</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&quot;choice&quot;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">except</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">KeyError</span><span style="color:#E1E4E8;">, Choice.DoesNotExist):</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># Redisplay the question voting form.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(</span></span>
<span class="line"><span style="color:#E1E4E8;">            request,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;polls/detail.html&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;question&quot;</span><span style="color:#E1E4E8;">: question,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;error_message&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;You didn&#39;t select a choice.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        )</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        selected_choice.votes </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        selected_choice.save()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># Always return an HttpResponseRedirect after successfully dealing</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># with POST data. This prevents data from being posted twice if a</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># user hits the Back button.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> HttpResponseRedirect(reverse(</span><span style="color:#9ECBFF;">&quot;polls:results&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(question.id,)))</span></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">results</span><span style="color:#E1E4E8;">(request, question_id):</span></span>
<span class="line"><span style="color:#E1E4E8;">    question </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> get_object_or_404(Question, </span><span style="color:#FFAB70;">pk</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">question_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&quot;polls/results.html&quot;</span><span style="color:#E1E4E8;">, {</span><span style="color:#9ECBFF;">&quot;question&quot;</span><span style="color:#E1E4E8;">: question})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.http </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> HttpResponse, HttpResponseRedirect</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.shortcuts </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> render</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> reverse</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.shortcuts </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> get_object_or_404, render</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> .models </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Question, Choice</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    latest_question_list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Question.objects.order_by(</span><span style="color:#032F62;">&quot;-pub_date&quot;</span><span style="color:#24292E;">)[:</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    context </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">&quot;latest_question_list&quot;</span><span style="color:#24292E;">: latest_question_list}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&quot;polls/index.html&quot;</span><span style="color:#24292E;">, context)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">detail</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_object_or_404(Question, </span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">question_id)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&quot;polls/detail.html&quot;</span><span style="color:#24292E;">, {</span><span style="color:#032F62;">&quot;question&quot;</span><span style="color:#24292E;">: question})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">vote</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_object_or_404(Question, </span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">question_id)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        selected_choice </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> question.choice_set.get(</span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">request.</span><span style="color:#005CC5;">POST</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&quot;choice&quot;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">except</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">KeyError</span><span style="color:#24292E;">, Choice.DoesNotExist):</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># Redisplay the question voting form.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(</span></span>
<span class="line"><span style="color:#24292E;">            request,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;polls/detail.html&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;question&quot;</span><span style="color:#24292E;">: question,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;error_message&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;You didn&#39;t select a choice.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        )</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        selected_choice.votes </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        selected_choice.save()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># Always return an HttpResponseRedirect after successfully dealing</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># with POST data. This prevents data from being posted twice if a</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># user hits the Back button.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> HttpResponseRedirect(reverse(</span><span style="color:#032F62;">&quot;polls:results&quot;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">args</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(question.id,)))</span></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">results</span><span style="color:#24292E;">(request, question_id):</span></span>
<span class="line"><span style="color:#24292E;">    question </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> get_object_or_404(Question, </span><span style="color:#E36209;">pk</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">question_id)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&quot;polls/results.html&quot;</span><span style="color:#24292E;">, {</span><span style="color:#032F62;">&quot;question&quot;</span><span style="color:#24292E;">: question})</span></span></code></pre></div></div></div><h2 id="_4-3-7-실행하기" tabindex="-1">4-3-7. 실행하기 <a class="header-anchor" href="#_4-3-7-실행하기" aria-label="Permalink to &quot;4-3-7. 실행하기&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>장고 웹 프레임워크를 사용해서 프로젝트를 처음 생성할 때 마다 반듯이 필요한 절차 이므로 꼭 이해하고, 익숙해져야 합니다.</p></div><div class="console-block" id="console-block-7"><input class="c-tab-win" id="c-tab-7-win" type="radio" name="console-7" checked=""><label for="c-tab-7-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-7-unix" type="radio" name="console-7"><label for="c-tab-7-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-7-win" style=""><div class="highlight"><pre>windows command 
C:\\hyungsik74\\pycharm\\polls-project&gt; cd C:\\hyungsik74\\pycharm\\polls-project
C:\\hyungsik74\\pycharm\\polls-project&gt; cd 
C:\\hyungsik74\\pycharm\\polls-project
C:\\hyungsik74\\pycharm\\polls-project&gt; py manage.py runserver
</pre></div></section><section class="c-content-unix" id="c-content-7-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>linux command
$/home/hyungsik74/pycharm/polls-project&gt; cd /home/hyungsik74/pycharm/polls-project
$/home/hyungsik74/pycharm/polls-project&gt; pwd
/home/hyungsik74/pycharm/polls-project
$/home/hyungsik74/pycharm/polls-project&gt; python manage.py runserver
</pre></div></div></section></div><ul><li>브라우저에서 <a href="http://127.0.0.1:8000/polls" target="_blank" rel="noreferrer">http://127.0.0.1:8000/polls</a> 접속합니다.</li></ul><p><img src="`+e+'" alt="ch04-03-07_01.png"> 그림4-3-7. 사용자 어플리케이션 초기 화면</p>',43),r=[c];function i(y,E,d,u,h,g){return a(),l("div",null,r)}const b=n(t,[["render",i]]);export{q as __pageData,b as default};
