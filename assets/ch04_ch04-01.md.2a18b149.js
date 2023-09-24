import{_ as t,a as e}from"./chunks/ch04-02.ab96f117.js";import{_ as l,o as a,c as i,Q as s}from"./chunks/framework.4976f53a.js";const d="/djangonote/assets/ch04-01-03-01_01.a02cd401.png",o="/djangonote/assets/ch04-01-03-01_02.ad23ab01.png",n="/djangonote/assets/ch04-01-03-01_03.8bb97971.png",r="/djangonote/assets/ch04-01-03_01.564e01c6.png",E=JSON.parse('{"title":"4-1. 어플리케이션 분석 & 설계","description":"","frontmatter":{},"headers":[],"relativePath":"ch04/ch04-01.md","filePath":"ch04/ch04-01.md"}'),h={name:"ch04/ch04-01.md"},c=s('<link rel="stylesheet" href="../css/style.css"><h1 id="_4-1-어플리케이션-분석-설계" tabindex="-1">4-1. 어플리케이션 분석 &amp; 설계 <a class="header-anchor" href="#_4-1-어플리케이션-분석-설계" aria-label="Permalink to &quot;4-1. 어플리케이션 분석 &amp; 설계&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">장고(Django) 프레임워크</p><p>이번 장에서는 어플리케이션을 개발하기 전에 어떤 웹 사이트를 만들지(분석), 어떻게 만들지에 대해서(설계), 사용자의 요구되는 사항을 정리하고, 제공해야 하는 기능을 도출하고, 화면에 어떤 내용을 표시 할지 및 데이터베이스를 어떻게 정의할지에 대해서 살펴보겠습니다.</p></div><h2 id="_4-1-1-설문조사-사이트" tabindex="-1">4-1-1 설문조사 사이트 <a class="header-anchor" href="#_4-1-1-설문조사-사이트" aria-label="Permalink to &quot;4-1-1 설문조사 사이트&quot;">​</a></h2><p>이번 장에서는 첫 번째 장고 어플리케이션을 작성하도록 하겠습니다.<br> 간단한 설문조사(Polls) 어플리케이션을 만드는 과정을 따라하면서, 장고 어플리케이션에 구조 대해서 이해할 수 있습니다.</p><p>어떤 서비스를 만든다는 것은 전체의 구성을 알고 그에 맞처 다양한 기능을 만들어 가는 과정입니다. 실제 개발을 하기에 앞서 전체 기능등을 살펴보겠습니다.</p><p>설문조사 어플리케이션은 두 개의 파트로 구성되어 있습니다.</p><ul><li><p>사람들이 설문 내용을 보고 직접 투표할 수 있는 개방된 사용자 웹 화면 <img src="'+t+'" alt="ch04-01-01_01.png"> 그림4-1-1 설문조사 사용자 화면 예시</p></li><li><p>관리자가 설문을 추가, 변경, 삭제할 수 있는 관리용 웹 화면 <img src="'+e+'" alt="ch04-02.png"> 그림4-1-1 설문조사 관리자 화면 예시</p></li></ul><h2 id="_4-1-2-설문조사-분석" tabindex="-1">4-1-2 설문조사 분석 <a class="header-anchor" href="#_4-1-2-설문조사-분석" aria-label="Permalink to &quot;4-1-2 설문조사 분석&quot;">​</a></h2><p>사용자 화면과 관리자 화면으로 구분된다.</p><ul><li>사용자 화면 <ul><li>전체 설문리스트를 화면에 보여준다.</li><li>설문리스트에서 한개의 항목을 클릭하면 설문에 해당하는 질문을 보여준다.</li><li>질문에서 한개를 선택하고, 투표 버튼을 클릭한다.</li><li>해당 설문에 대한 투표 결과를 보여준다.</li></ul></li><li>관리자 화면 <ul><li>설문항목에 대해서 추가, 변경, 삭제 할 수 있는 화면을 제공해야 한다.</li></ul></li></ul><h2 id="_4-1-3-설문조사-설계" tabindex="-1">4-1-3 설문조사 설계 <a class="header-anchor" href="#_4-1-3-설문조사-설계" aria-label="Permalink to &quot;4-1-3 설문조사 설계&quot;">​</a></h2><h2 id="_4-1-3-1-사용자-화면-설계" tabindex="-1">4-1-3-1 사용자 화면 설계 <a class="header-anchor" href="#_4-1-3-1-사용자-화면-설계" aria-label="Permalink to &quot;4-1-3-1 사용자 화면 설계&quot;">​</a></h2><p>투표목록: 관리자 페이지에서 만든 투표 목록이 나타납니다. 각 투표는 투표 제목이 출력되고 해당 제목을 클릭하면 투표 화면으로 이동 합니다.</p><p><img src="'+d+'" alt="ch04-01-03-01_01.png"> 그림4-1-3 투표목록</p><p>투표화면: 투표 화면에는 투표 제목과 투표 항목 목록이 나타납니다. 라디오(Radio) 버튼과 함께 표시해두고 선택할 수 있도록 만들었습니다. 한 항목을 선택하고 Vote 버튼을 클릭하면 투표 결과 화면으로 이동합니다.</p><p><img src="'+o+'" alt="ch04-01-03-01_02.png"> 그림4-1-3 투표선택 화면</p><p>투표화면: 투표 화면에는 투표 제목과 투표 항목 목록이 나타납니다. 라디오(Radio) 버튼과 함께 표시해두고 선택할 수 있도록 만들었습니다. 한 항목을 선택하고 Vote 버튼을 클릭하면 투표 결과 화면으로 이동합니다.</p><p><img src="'+n+'" alt="ch04-01-03-01_03.png"> 그림4-1-3 투표결과 화면</p><h2 id="_4-1-3-2-관리자-화면-설계" tabindex="-1">4-1-3-2 관리자 화면 설계 <a class="header-anchor" href="#_4-1-3-2-관리자-화면-설계" aria-label="Permalink to &quot;4-1-3-2 관리자 화면 설계&quot;">​</a></h2><p>투표목록: 관리자 페이지에서 만든 투표 목록이 나타납니다. 각 투표는 투표 제목이 출력되고 해당 제목을 클릭하면 투표 화면으로 이동 합니다. <img src="'+r+'" alt="ch04-01-03_01.png"> 그림4-1-3 관리자 투표목록</p><h2 id="_4-1-3-3-데이터베이스-설계" tabindex="-1">4-1-3-3 데이터베이스 설계 <a class="header-anchor" href="#_4-1-3-3-데이터베이스-설계" aria-label="Permalink to &quot;4-1-3-3 데이터베이스 설계&quot;">​</a></h2><p>앞의 분석 &amp; 설계 단계에서 정의한 기능에 대해서 데이터베이스를 설계하는 단계입니다. 설문조사에 필요한 테이블은 2개로 구성되어 있으며 아래와 같습니다.</p><ul><li><p>테이블 목록</p></li><li><p>테이블 상세</p></li><li><p>테이블명: 설문조사 리스트</p></li></ul><table><thead><tr><th>Name</th><th style="text-align:left;">영문명</th><th style="text-align:left;">타입</th><th style="text-align:left;">클래스변수</th><th style="text-align:left;">장고의 필드 클래스</th></tr></thead><tbody><tr><td>순번</td><td style="text-align:left;">Id</td><td style="text-align:left;">integer</td><td style="text-align:left;">(id)</td><td style="text-align:left;">(장고에서 자동생성)</td></tr><tr><td>설문제목</td><td style="text-align:left;">question_text</td><td style="text-align:left;">varchar(200)</td><td style="text-align:left;">question_text</td><td style="text-align:left;">models.CharField(max_length=200)</td></tr><tr><td>생성일자</td><td style="text-align:left;">pub_date</td><td style="text-align:left;">datetime</td><td style="text-align:left;">pub_date</td><td style="text-align:left;">models.DateTimeField(&#39;date published&#39;)</td></tr></tbody></table><details class="details custom-block"><summary>SQL 테이블 생성 스크립니다.</summary><p>CREATE TABLE &quot;polls_question&quot; (<br> &quot;id&quot; integer NOT NULL PRIMARY KEY AUTOINCREMENT,<br> &quot;question_text&quot; varchar(200) NOT NULL,<br> &quot;pub_date&quot; datetime NOT NULL<br> );</p></details><ul><li>테이블명: 설문조사 선택항목</li></ul><table><thead><tr><th>Name</th><th style="text-align:left;">영문명</th><th style="text-align:left;">타입</th><th style="text-align:left;">클래스변수</th><th style="text-align:left;">장고의 필드 클래스</th></tr></thead><tbody><tr><td>순번</td><td style="text-align:left;">Id</td><td style="text-align:left;">integer</td><td style="text-align:left;">(id)</td><td style="text-align:left;">(장고에서 자동생성)</td></tr><tr><td>선택항목</td><td style="text-align:left;">choice_text</td><td style="text-align:left;">varchar(200)</td><td style="text-align:left;">choice_text</td><td style="text-align:left;">models.CharField(max_length=200)</td></tr><tr><td>건수</td><td style="text-align:left;">votes</td><td style="text-align:left;">integer</td><td style="text-align:left;">votes</td><td style="text-align:left;">models.Integer(default=0)</td></tr><tr><td>설문조사순번</td><td style="text-align:left;">question_id</td><td style="text-align:left;">integer</td><td style="text-align:left;">question</td><td style="text-align:left;">models.ForeingKey(Question)</td></tr></tbody></table><details class="details custom-block"><summary>SQL 테이블 생성 스크립니다.</summary><p>CREATE TABLE &quot;polls_choice&quot; (<br> &quot;id&quot; integer NOT NULL PRIMARY KEY AUTOINCREMENT,<br> &quot;choice_text&quot; varchar(200) NOT NULL,<br> &quot;votes&quot; integer NOT NULL, &quot;question_id&quot; bigint NOT NULL REFERENCES<br> &quot;polls_question&quot; (&quot;id&quot;) DEFERRABLE INITIALLY DEFERRED<br> );</p><p>CREATE INDEX &quot;polls_choice_question_id_c5b4b260&quot; ON &quot;polls_choice&quot; (&quot;question_id&quot;);</p></details>',29),_=[c];function p(u,g,m,f,x,q){return a(),i("div",null,_)}const N=l(h,[["render",p]]);export{E as __pageData,N as default};
