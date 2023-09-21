import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.4976f53a.js";const o="/djangonote/assets/ch03-05-01_01.ec83bc94.png",e="/djangonote/assets/ch03-05-01_02.87788d66.png",p="/djangonote/assets/ch03-05-02_01.99b53d27.png",c="/djangonote/assets/ch03-05-03_01.c28e4aef.png",t="/djangonote/assets/ch03-05-04_01.bb09f17a.png",i="/djangonote/assets/ch03-05-05_01.2236a806.png",r="/djangonote/assets/ch03-05-06_01.6ddd5bac.png",h="/djangonote/assets/ch03-05-06_02.858b0d25.png",d="/djangonote/assets/ch03-05-06_03.71f668da.png",g="/djangonote/assets/ch03-05-06_04.877c8e73.png",y="/djangonote/assets/ch03-05-07_01.852501bb.png",m="/djangonote/assets/ch03-05-12_01.b43929be.png",u="/djangonote/assets/ch03-05-12_02.988acccb.png",q=JSON.parse('{"title":"3-5. Hellow World Django Project","description":"","frontmatter":{},"headers":[],"relativePath":"ch03/ch03-05.md","filePath":"ch03/ch03-05.md"}'),b={name:"ch03/ch03-05.md"},E=l('<link rel="stylesheet" href="../css/style.css"><h1 id="_3-5-hellow-world-django-project" tabindex="-1">3-5. Hellow World Django Project <a class="header-anchor" href="#_3-5-hellow-world-django-project" aria-label="Permalink to &quot;3-5. Hellow World Django Project&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">First Django Project</p><p>프로그래밍 언어를 배우는 첫 번째 실습 예제인 Hellow World 프로그램입니다. 이번 장에서는 파이썬 장고 프레임워크를 이용한 헬로우 장고 월드 프로그램을 작성해 보겠습니다.</p></div><h2 id="_3-5-1-기본-디렉토리-구조" tabindex="-1">3-5-1. 기본 디렉토리 구조 <a class="header-anchor" href="#_3-5-1-기본-디렉토리-구조" aria-label="Permalink to &quot;3-5-1. 기본 디렉토리 구조&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">프로젝트 폴더 구조</p><p>실습 및 혼선을 예방하기 위해서 아래와 같은 구조로 폴더를 구성합니다.</p><p>C:\\hyungsik74\\pycharm\\helloworld-project</p><p>C:\\{github-ID}\\pycharm\\helloworld-project</p><p>{github-ID}: hyungsik74 (본인의 Github ID) pycharm: pycharm (고정 값) {project-name}: helloworld-project (고정 값)</p></div><p>** 파이참에서 File &gt; New Porjet ...<br> 위에서 정의한 디렉토리명으로 Create Pject 를 생성합니다.</p><p><img src="'+o+'" alt="ch03-05-01_01.png"> 그림5-1-1 Create Project</p><p><img src="'+e+`" alt="ch03-05-01_02.png"> 그림5-1-1 Create Project Location 설정</p><h2 id="_3-5-2-장고-설치-확인" tabindex="-1">3-5-2. 장고 설치 확인 <a class="header-anchor" href="#_3-5-2-장고-설치-확인" aria-label="Permalink to &quot;3-5-2. 장고 설치 확인&quot;">​</a></h2><div class="console-block" id="console-block-1"><input class="c-tab-win" id="c-tab-1-win" type="radio" name="console-1" checked=""><label for="c-tab-1-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-1-unix" type="radio" name="console-1"><label for="c-tab-1-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-1-win" style=""><div class="highlight"><pre><span class="gp">...\\&gt;</span> python --version
<span class="gp">...\\&gt;</span> python -m django --version
<span class="gp">...\\&gt;</span> python -m pip install django
</pre></div></section><section class="c-content-unix" id="c-content-1-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">$ ...\\&gt;</span> python --version
<span class="gp">$ ...\\&gt;</span> python -m django --version
<span class="gp">$ ...\\&gt;</span> python -m pip install django
</pre></div></div></section></div><p><img src="`+p+`" alt="ch03-05-02_01.png"> 그림5-2-1 가상환경(vEnv)에 Django 설치</p><h2 id="_3-5-3-장고-신규-프로젝트-생성" tabindex="-1">3-5-3. 장고 신규 프로젝트 생성 <a class="header-anchor" href="#_3-5-3-장고-신규-프로젝트-생성" aria-label="Permalink to &quot;3-5-3. 장고 신규 프로젝트 생성&quot;">​</a></h2><div class="console-block" id="console-block-2"><input class="c-tab-win" id="c-tab-2-win" type="radio" name="console-2" checked=""><label for="c-tab-2-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-2-unix" type="radio" name="console-2"><label for="c-tab-2-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-2-win" style=""><div class="highlight"><pre><span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> cd C:\\hyungsik74\\pycharm\\helloworld-project
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> django-admin startproject config .
</pre></div></section><section class="c-content-unix" id="c-content-2-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">...\\&gt;</span> cd /home/hyungsik74/pycharm/helloworld-project/
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project&gt;</span> django-admin startproject config .
</pre></div></div></section></div><p>명렁에서 제일 마지막 .을 꼭 포함합니다. 장고프로 젝트 관련 파일은 Config 폴더에 생성됩니다.<br> django-admin startproject config .</p><p><img src="`+c+`" alt="ch03-05-03_01.png"> 그림5-3-1 Django 신규 프로젝트 생성</p><h2 id="_3-5-4-기본-db테이블-생성" tabindex="-1">3-5-4. 기본 DB테이블 생성 <a class="header-anchor" href="#_3-5-4-기본-db테이블-생성" aria-label="Permalink to &quot;3-5-4. 기본 DB테이블 생성&quot;">​</a></h2><div class="console-block" id="console-block-4"><input class="c-tab-win" id="c-tab-4-win" type="radio" name="console-4" checked=""><label for="c-tab-4-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-4-unix" type="radio" name="console-4"><label for="c-tab-4-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-4-win" style=""><div class="highlight"><pre><span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> cd C:\\hyungsik74\\pycharm\\helloworld-project
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> python manage.py migrate
</pre></div></section><section class="c-content-unix" id="c-content-4-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">...\\&gt;</span> cd /home/hyungsik74/pycharm/helloworld-project/
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project&gt;</span> python manage.py migrate
</pre></div></div></section></div><p><img src="`+t+`" alt="ch03-05-04_01.png"> 그림5-4-1 Django 관리자 기본 테이블 생성</p><h2 id="_3-5-5-관리자-계정-생성" tabindex="-1">3-5-5. 관리자 계정 생성 <a class="header-anchor" href="#_3-5-5-관리자-계정-생성" aria-label="Permalink to &quot;3-5-5. 관리자 계정 생성&quot;">​</a></h2><div class="console-block" id="console-block-4"><input class="c-tab-win" id="c-tab-5-win" type="radio" name="console-5" checked=""><label for="c-tab-5-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-5-unix" type="radio" name="console-5"><label for="c-tab-5-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-5-win" style=""><div class="highlight"><pre><span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> cd C:\\hyungsik74\\pycharm\\helloworld-project
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> python manage.py createsuperuser
</pre></div></section><section class="c-content-unix" id="c-content-5-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">...\\&gt;</span> cd /home/hyungsik74/pycharm/helloworld-project/
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project&gt;</span> python manage.py createsuperuser
</pre></div></div></section></div><p><img src="`+i+`" alt="ch03-05-05_01.png"> 그림5-5-1 Django 관리자 계정 생성</p><h2 id="_3-5-6-기본-프로젝트만-실행" tabindex="-1">3-5-6. 기본 프로젝트만 실행 <a class="header-anchor" href="#_3-5-6-기본-프로젝트만-실행" aria-label="Permalink to &quot;3-5-6. 기본 프로젝트만 실행&quot;">​</a></h2><div class="console-block" id="console-block-6"><input class="c-tab-win" id="c-tab-6-win" type="radio" name="console-6" checked=""><label for="c-tab-6-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-6-unix" type="radio" name="console-6"><label for="c-tab-6-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-6-win" style=""><div class="highlight"><pre><span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> cd C:\\hyungsik74\\pycharm\\helloworld-project
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> python manage.py runserver
</pre></div></section><section class="c-content-unix" id="c-content-6-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">...\\&gt;</span> cd /home/hyungsik74/pycharm/helloworld-project/
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project&gt;</span> python manage.py runserver
</pre></div></div></section></div><p><img src="`+r+'" alt="ch03-05-06_01.png"> 그림5-6-1 Django 프로젝트 실행</p><p><img src="'+h+'" alt="ch03-05-06_02.png"> 그림5-6-2 Django 프로젝트 화면</p><p><img src="'+d+'" alt="ch03-05-06_03.png"> 그림5-6-3 Django 관리자 로그인 화면</p><p><img src="'+g+`" alt="ch03-05-06_04.png"> 그림5-6-4 Django 관리자 페이지 예</p><h2 id="_3-5-7-장고-어플리케이션-생성" tabindex="-1">3-5-7. 장고 어플리케이션 생성 <a class="header-anchor" href="#_3-5-7-장고-어플리케이션-생성" aria-label="Permalink to &quot;3-5-7. 장고 어플리케이션 생성&quot;">​</a></h2><div class="console-block" id="console-block-7"><input class="c-tab-win" id="c-tab-7-win" type="radio" name="console-7" checked=""><label for="c-tab-7-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-7-unix" type="radio" name="console-7"><label for="c-tab-7-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-7-win" style=""><div class="highlight"><pre><span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> cd C:\\hyungsik74\\pycharm\\helloworld-project
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> python manage.py startapp home
</pre></div></section><section class="c-content-unix" id="c-content-7-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">...\\&gt;</span> cd /home/hyungsik74/pycharm/helloworld-project/
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project&gt;</span> python manage.py startapp home
</pre></div></div></section></div><p><img src="`+y+`" alt="ch03-05-07_01.png"> 그림5-7-1 Django 어플리케이션 생성</p><h2 id="_3-5-8-장고-프로젝트와-어플리케이션-연결" tabindex="-1">3-5-8. 장고 프로젝트와 어플리케이션 연결 <a class="header-anchor" href="#_3-5-8-장고-프로젝트와-어플리케이션-연결" aria-label="Permalink to &quot;3-5-8. 장고 프로젝트와 어플리케이션 연결&quot;">​</a></h2><div class="console-block" id="console-block-8"><input class="c-tab-win" id="c-tab-8-win" type="radio" name="console-8" checked=""><label for="c-tab-8-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-8-unix" type="radio" name="console-8"><label for="c-tab-8-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-8-win" style=""><div class="highlight"><pre><span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> cd C:\\hyungsik74\\pycharm\\helloworld-project\\config
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project\\config&gt;</span> notepad settings.py
</pre></div></section><section class="c-content-unix" id="c-content-8-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">...\\&gt;</span> cd /home/hyungsik74/pycharm/helloworld-project/config
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project/config&gt;</span> vi settings.py
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-y05Xb" id="tab-vV1Bjaj" checked="checked"><label for="tab-vV1Bjaj">settings.py</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Application definition</span></span>
<span class="line"><span style="color:#79B8FF;">INSTALLED_APPS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;home.apps.HomeConfig&#39;</span><span style="color:#E1E4E8;">,         </span><span style="color:#6A737D;">#---&gt; 이 부분 추가 함.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.admin&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.auth&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.contenttypes&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.sessions&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.messages&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;django.contrib.staticfiles&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Application definition</span></span>
<span class="line"><span style="color:#005CC5;">INSTALLED_APPS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;home.apps.HomeConfig&#39;</span><span style="color:#24292E;">,         </span><span style="color:#6A737D;">#---&gt; 이 부분 추가 함.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.admin&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.auth&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.contenttypes&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.sessions&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.messages&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;django.contrib.staticfiles&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div></div></div><h2 id="_3-5-9-tempplate-만들기" tabindex="-1">3-5-9. Tempplate 만들기 <a class="header-anchor" href="#_3-5-9-tempplate-만들기" aria-label="Permalink to &quot;3-5-9. Tempplate 만들기&quot;">​</a></h2><div class="console-block" id="console-block-9"><input class="c-tab-win" id="c-tab-9-win" type="radio" name="console-9" checked=""><label for="c-tab-9-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-9-unix" type="radio" name="console-9"><label for="c-tab-9-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-9-win" style=""><div class="highlight"><pre><span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> cd C:\\hyungsik74\\pycharm\\helloworld-project\\home
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project\\home&gt;</span> mkdir templates
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project\\home&gt;</span> mkdir templates\\home
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project\\home&gt;</span> cd templates\\home
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project\\home\\templates\\home&gt;</span> notepad index.html
</pre></div></section><section class="c-content-unix" id="c-content-9-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">...\\&gt;</span> cd /home/hyungsik74/pycharm/helloworld-project/home
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project/home&gt;</span> mkdir templates
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project/home&gt;</span> mkdir templates/home
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project/home&gt;</span> cd templates/home
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project/home/templates/home&gt;</span> vi index.html
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Q65ez" id="tab-Mhezs-8" checked="checked"><label for="tab-Mhezs-8">index.html</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Hello Django World !!!</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    Hello Django World !!!</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></div></div><h2 id="_3-5-10-view-만들기" tabindex="-1">3-5-10. View 만들기 <a class="header-anchor" href="#_3-5-10-view-만들기" aria-label="Permalink to &quot;3-5-10. View 만들기&quot;">​</a></h2><div class="console-block" id="console-block-10"><input class="c-tab-win" id="c-tab-10-win" type="radio" name="console-10" checked=""><label for="c-tab-10-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-10-unix" type="radio" name="console-10"><label for="c-tab-10-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-10-win" style=""><div class="highlight"><pre><span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> cd C:\\hyungsik74\\pycharm\\helloworld-project\\home
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project\\home&gt;</span> notepad views.py
</pre></div></section><section class="c-content-unix" id="c-content-10-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">...\\&gt;</span> cd /home/hyungsik74/pycharm/helloworld-project/home
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project/home&gt;</span> vi views.py
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-aXeAK" id="tab-9VlQTTw" checked="checked"><label for="tab-9VlQTTw">home/views.py</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.shortcuts </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> render</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Create your views here.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">(request):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> render(request, </span><span style="color:#9ECBFF;">&#39;home/index.html&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.shortcuts </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> render</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Create your views here.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">(request):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> render(request, </span><span style="color:#032F62;">&#39;home/index.html&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div></div></div><h2 id="_3-5-11-url-연결" tabindex="-1">3-5-11. URL 연결 <a class="header-anchor" href="#_3-5-11-url-연결" aria-label="Permalink to &quot;3-5-11. URL 연결&quot;">​</a></h2><div class="console-block" id="console-block-11"><input class="c-tab-win" id="c-tab-11-win" type="radio" name="console-11" checked=""><label for="c-tab-11-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-11-unix" type="radio" name="console-11"><label for="c-tab-11-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-11-win" style=""><div class="highlight"><pre><span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> cd C:\\hyungsik74\\pycharm\\helloworld-project\\config
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project\\config&gt;</span> notepad urls.py
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> cd C:\\hyungsik74\\pycharm\\helloworld-project\\home
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project\\home&gt;</span> notepad urls.py
</pre></div></section><section class="c-content-unix" id="c-content-11-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">...\\&gt;</span> cd /home/hyungsik74/pycharm/helloworld-project/config
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project/config&gt;</span> vi urls.py
<span class="gp">...\\&gt;</span> cd /home/hyungsik74/pycharm/helloworld-project/home
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project/home&gt;</span> vi urls.py
</pre></div></div></section></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-FhG2o" id="tab-fUCaS8c" checked="checked"><label for="tab-fUCaS8c">config/urls.py</label><input type="radio" name="group-FhG2o" id="tab-gpRuwTI"><label for="tab-gpRuwTI">home/urls.py</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.contrib </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> admin</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path, include</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">urlpatterns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;home/&quot;</span><span style="color:#E1E4E8;">, include(</span><span style="color:#9ECBFF;">&quot;home.urls&quot;</span><span style="color:#E1E4E8;">)),</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;admin/&quot;</span><span style="color:#E1E4E8;">, admin.site.urls),</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.contrib </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> admin</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> path, include</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">urlpatterns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;home/&quot;</span><span style="color:#24292E;">, include(</span><span style="color:#032F62;">&quot;home.urls&quot;</span><span style="color:#24292E;">)),</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;admin/&quot;</span><span style="color:#24292E;">, admin.site.urls),</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> django.urls </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> . </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> views</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app_name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;home&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">urlpatterns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    path(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, views.index, </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;index&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> django.urls </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> path</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> . </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> views</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app_name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;home&quot;</span></span>
<span class="line"><span style="color:#24292E;">urlpatterns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    path(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, views.index, </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;index&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div></div></div><h2 id="_3-5-12-helloworld-실행하기" tabindex="-1">3-5-12. Helloworld 실행하기 <a class="header-anchor" href="#_3-5-12-helloworld-실행하기" aria-label="Permalink to &quot;3-5-12. Helloworld 실행하기&quot;">​</a></h2><div class="console-block" id="console-block-12"><input class="c-tab-win" id="c-tab-12-win" type="radio" name="console-12" checked=""><label for="c-tab-12-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-12-unix" type="radio" name="console-12"><label for="c-tab-12-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-12-win" style=""><div class="highlight"><pre><span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> cd C:\\hyungsik74\\pycharm\\helloworld-project
<span class="gp">C:\\hyungsik74\\pycharm\\helloworld-project&gt;</span> python manage.py runserver
</pre></div></section><section class="c-content-unix" id="c-content-12-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">...\\&gt;</span> cd /home/hyungsik74/pycharm/helloworld-project
<span class="gp">$ /home/hyungsik74/pycharm/helloworld-project&gt;</span> python manage.py runserver
</pre></div></div></section></div><p><img src="`+m+'" alt="ch03-05-12_01.png"> 그림5-12-1 Django 프로젝트 실행</p><div class="tip custom-block"><p class="custom-block-title">축하합니다 !!.</p><p>파이썬 장고 웹 프로그래밍 세계로 오신것을 환영합니다.</p><p>장고를 이용해서 멋진 웹 프로그래밍을 도전하세요.</p></div><p><img src="'+u+'" alt="ch03-05-12_02.png"> 그림5-12-2 Hello Django World !!!</p>',47),v=[E];function w(k,j,_,x,f,C){return n(),a("div",null,v)}const D=s(b,[["render",w]]);export{q as __pageData,D as default};
