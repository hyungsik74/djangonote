import{_ as t,o as c,c as s,Q as n,k as a}from"./chunks/framework.4976f53a.js";const o="/djangonote/assets/ch05-02-01_00.704b2043.png",e="/djangonote/assets/ch05-02-01_01.f1e808e5.png",i="/djangonote/assets/ch05-02-01_01_02.ae51c600.png",p="/djangonote/assets/ch05-02-02_01.0ff8afb1.png",r="/djangonote/assets/ch05-02-03_01.c90350d8.png",l="/djangonote/assets/ch05-02-04_01.12720029.png",h="/djangonote/assets/ch05-02-05_01.395d7bee.png",d="/djangonote/assets/ch04-02-05_02.030c1228.png",P=JSON.parse('{"title":"5-2. 프로젝트 기본구조 만들기","description":"","frontmatter":{},"headers":[],"relativePath":"ch05/ch05-02.md","filePath":"ch05/ch05-02.md"}'),g={name:"ch05/ch05-02.md"},m=n('<link rel="stylesheet" href="../css/style.css"><h1 id="_5-2-프로젝트-기본구조-만들기" tabindex="-1">5-2. 프로젝트 기본구조 만들기 <a class="header-anchor" href="#_5-2-프로젝트-기본구조-만들기" aria-label="Permalink to &quot;5-2. 프로젝트 기본구조 만들기&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title"><code>django-admin startporject config .</code></p><p>장고 웹 어플리케이션은 장고 프레임워크를 이용해서 프로젝트 뻐대를 만드는 것에서 부터 시작합니다. 프로젝트에 필요한 디렉토리 및 파일을 구성하고, 설정 파일을 셋팅합니다. 또한 기본 테이블을 생성하고, 관리자 계정인 슈퍼유저를 생성하는 것이 필요합니다.</p></div><p>    1. 장고 프로젝트 생성<br>     2. 기본 테이블 생성<br>     3. 관리자 생성</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>장고 웹 프레임워크를 사용해서 프로젝트를 처음 생성할 때 마다 반듯이 필요한 절차 이므로 꼭 이해하고, 익숙해져야 합니다.</p></div><h2 id="_5-2-1-기본-디렉토리-구조" tabindex="-1">5-2-1. 기본 디렉토리 구조 <a class="header-anchor" href="#_5-2-1-기본-디렉토리-구조" aria-label="Permalink to &quot;5-2-1. 기본 디렉토리 구조&quot;">​</a></h2>',6),b=a("div",{class:"danger custom-block"},[a("p",{class:"custom-block-title"},"프로젝트 폴더 구조"),a("p",null,"실습시 혼선을 예방하기 위해서 아래와 같은 구조로 폴더를 구성합니다."),a("p",{"project-name":""},"C:\\{github-ID}\\pycharm\\"),a("p",null,"{github-ID}: 본인의 Github ID (예: hyungsik74) pycharm: 고정 값 (예: pycharm) {project-name}: 장고 프로젝트 명 (예: bookmark-project)")],-1),k=n('<p>파이참: File &gt; New Porjet ... <img src="'+o+'" alt="ch05-02-01_00.png"> 그림5-02-01. Project 위치 선택</p><p><img src="'+e+'" alt="ch05-02-01_01.png"> 그림5-02-01. Create Porject</p><p><img src="'+i+`" alt="ch05-02-01_01_02.png"> 그림5-02-01. 프로젝트 생성후 Porject 폴더 구조</p><h2 id="_5-2-2-장고-프로젝트-생성" tabindex="-1">5-2-2. 장고 프로젝트 생성 <a class="header-anchor" href="#_5-2-2-장고-프로젝트-생성" aria-label="Permalink to &quot;5-2-2. 장고 프로젝트 생성&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">주의 사항</p><p>startproject 생성시 아래와 같이 맨 마직막에 . 을 반듯이 입력한다. 이것은 프로젝트 생성시 현재 디렉토리에 config 폴더를 생성하라는 내용입니다.<br><code>django-admin startproject config .</code></p></div><div class="console-block" id="console-block-1"><input class="c-tab-win" id="c-tab-1-win" type="radio" name="console-1" checked=""><label for="c-tab-1-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-1-unix" type="radio" name="console-1"><label for="c-tab-1-unix" title="Linux/macOS">/</label><section class="c-content-win" id="c-content-1-win" style=""><div class="highlight"><pre>
...\\&gt; python --version
...\\&gt; python -m django --version
...\\&gt; python -m pip install django
...\\&gt; cd C:\\hyungsik74\\pycharm\\bookmark-project\\
C:\\hyungsik74\\pycharm\\bookmark-project\\&gt; django-admin startproject config .
C:\\hyungsik74\\pycharm\\bookmark-project\\&gt; cd
C:\\hyungsik74\\pycharm\\bookmark-project\\
C:\\hyungsik74\\pycharm\\bookmark-project\\&gt; dir
</pre></div></section><section class="c-content-unix" id="c-content-1-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre>
$ python --version
$ python -m django --version
$ python -m install django
$ cd /home/hyungsik74/pycharm/bookmark-project
$ django-admin startproject config .
$ dir
$ pwd
/home/hyungsik74/pycharm/bookmark-project
</pre></div></div></section></div><p>다음의 그림과 같이 장고가 필요한 디렉토리 및 파일을 생성해 줍니다. 생성된 폴더의 구조를 보면 config라는 생성되는것을 확인 할 수 있습니다. 프로젝트 설정 관련 디렉토리이며, 프로젝트에서 필요한 파일이 자동으로 생성된 것을 볼 수 있다.</p><p><img src="`+p+`" alt="ch05-02-02_01.png"> 그림5-2-2. Django Porject 폴더 구조</p><h2 id="_5-2-3-기본-db테이블-생성" tabindex="-1">5-2-3. 기본 DB테이블 생성 <a class="header-anchor" href="#_5-2-3-기본-db테이블-생성" aria-label="Permalink to &quot;5-2-3. 기본 DB테이블 생성&quot;">​</a></h2><div class="console-block" id="console-block-2"><input class="c-tab-win" id="c-tab-2-win" type="radio" name="console-2" checked=""><label for="c-tab-2-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-2-unix" type="radio" name="console-2"><label for="c-tab-2-unix" title="Linux/macOS">/</label><section class="c-content-unix" id="c-content-2-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">$</span><span class="gp">/home/hyungsik74/pycharm&gt;</span> cd /home/hyungsik74/pycharm/bookmark-project
<span class="gp">$</span><span class="gp">/home/hyungsik74/pycharm/bookmark-project&gt;</span> pwd
/home/hyungsik74/pycharm/bookmark-project
<span class="gp">$</span><span class="gp">/home/hyungsik74/pycharm/bookmark-project&gt;</span> python manage.py migrate
</pre></div></div></section><section class="c-content-win" id="c-content-2-win" style=""><div class="highlight"><pre><span class="gp">C:\\hyungsik74\\pycharm&gt;</span> cd C:\\hyungsik74\\pycharm\\bookmark-project
<span class="gp">C:\\hyungsik74\\pycharm\\bookmark-project&gt;</span> cd 
C:\\hyungsik74\\pycharm\\bookmark-project
<span class="gp">C:\\hyungsik74\\pycharm\\bookmark-project&gt;</span> python manage.py migrate
</pre></div></section></div><p><img src="`+r+`" alt="ch05-02-03_01.png"> 그림5-2-3. 데이터베이스 테이블 생성</p><h2 id="_5-2-4-관리자-계정-생성" tabindex="-1">5-2-4. 관리자 계정 생성 <a class="header-anchor" href="#_5-2-4-관리자-계정-생성" aria-label="Permalink to &quot;5-2-4. 관리자 계정 생성&quot;">​</a></h2><div class="console-block" id="console-block-3"><input class="c-tab-win" id="c-tab-3-win" type="radio" name="console-3" checked=""><label for="c-tab-3-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-3-unix" type="radio" name="console-3"><label for="c-tab-3-unix" title="Linux/macOS">/</label><section class="c-content-unix" id="c-content-3-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">$</span><span class="gp">/home/hyungsik74/pycharm/bookmark-project&gt;</span> python manage.py createsuperuser
</pre></div></div></section><section class="c-content-win" id="c-content-3-win" style=""><div class="highlight"><pre><span class="gp">C:\\hyungsik74\\pycharm\\bookmark-project&gt;</span> python manage.py createsuperuser
</pre></div></section></div><p><img src="`+l+`" alt="ch05-02-04_01.png"> 그림5-2-4. 관리자 계정 및 암호 설정</p><h2 id="_5-2-5-장고-프로젝트-실행하기" tabindex="-1">5-2-5. 장고 프로젝트 실행하기 <a class="header-anchor" href="#_5-2-5-장고-프로젝트-실행하기" aria-label="Permalink to &quot;5-2-5. 장고 프로젝트 실행하기&quot;">​</a></h2><div class="console-block" id="console-block-4"><input class="c-tab-win" id="c-tab-4-win" type="radio" name="console-4" checked=""><label for="c-tab-4-win" title="Windows"></label><input class="c-tab-unix" id="c-tab-4-unix" type="radio" name="console-4"><label for="c-tab-4-unix" title="Linux/macOS">/</label><section class="c-content-unix" id="c-content-4-unix" style=""><div class="highlight-console notranslate"><div class="highlight"><pre><span class="gp">$</span><span class="gp">/home/hyungsik74/pycharm/bookmark-project&gt;</span> python manage.py runserver
</pre></div></div></section><section class="c-content-win" id="c-content-4-win" style=""><div class="highlight"><pre><span class="gp">C:\\hyungsik74\\pycharm\\bookmark-project&gt;</span> python manage.py runserver
</pre></div></section></div><p>웹 브라우저에서 <a href="http://127.0.0.1:8000/" target="_blank" rel="noreferrer">http://127.0.0.1:8000/</a> 접속합니다.</p><p><img src="`+h+'" alt="ch05-02-05_01.png"> 그림5-2-5. 실행화면</p><div class="warning custom-block"><p class="custom-block-title">축하합니다 !</p><p>다음과 같이 화면이 표시되면 정상적으로 프로젝트가 생성 된 것입니다.</p></div><p><img src="'+d+'" alt="ch05-02-05_02.png"> 그림5-2-5. <a href="http://127.0.0.1:8000/" target="_blank" rel="noreferrer">http://127.0.0.1:8000/</a></p>',20),u=[m,b,k];function _(y,j,v,f,x,w){return c(),s("div",null,u)}const $=t(g,[["render",_]]);export{P as __pageData,$ as default};
