# Server Side JavaScript

## 서버 측 자바스크립트와 nodejs 소개

자바스크립트는 웹이라는 테두리 안에 있던 언어 였다.

자바스크립트의 큰 변화
* 2004 Google GMAIL
* 2004 Google GMAP
* 2008 Google V8 (오픈소스 공개)
* 2009 Nodejs (v8엔진을 사용, event-driven, non-blocking IO)

PURE WEB 어떤 사용자든 웹 브라우저만 있으면 웹 애플리케이션을 쓸 수 있음.

자바스크립트는 웹이 아닌 부분에서도 사용 됨 (탈웹화)

웹에서 사용되는 기술은 자바스크립트 밖에 없다. 그리고 다른 분야에서도 사용된다.

자바스크립트의 팔자는 정말 큰 변화를 맞이하게 됨.

Node.js는 서버 쪽에서 동작하는 자바스크립트로 확장되는 결정적 계기를 마련함.

Web Browser vs Nodejs의 차이??

language = JavaScript
RunTime = Web Browser, Nodejs

alert('Hello world') -> 자바 스크립트가 웹 브라우저에서 실행될때. 이 문법은 자바스크립트의 문법

만약에 alert를 Nodejs에서 실행하면 에러가 남.

자바스크립트만 할줄 알면 웹 브라우저와 Nodejs를 제어할 수 있음.

Nodejs의 경쟁자?? 

* Python
* Ruby
* PHP
* JAVA

이런 기술들이 서버 쪽에서 동작하면 Nodejs의 경쟁자라 할 수 있음

Nodejs의 장점?? 

* 속도.. 성능이 상당히 괜찮음. 
* 자바스크립트로 하나의 언어로 완결된 애플리케이션을 만들 수 있음

## nodejs 설치 및 실행

이번 수업에서는 Nodejs 설치하고, 간단한 프로그램을 만들어서 실행시키는 방법을 알아봅니다.

Nodejs 홈페이지
-----------
[nodejs](https://nodejs.org/en/)

아톰 에디터 사용방법
----------
[atom 수업](https://opentutorials.org/module/1579)

아톰에디터를 사용하지만 필수가 아님. 선호하는 에디터를 사용하면 됨.

맥 기준.

ls -al = 현재 디렉토리의 내용을 보여줌.

pwd = 현재 경로

node hello.js

## 간단한 웹 애플리케이션 만들기

본 수업에서는 Nodejs를 이용해서 간단한 서버 애플리케이션을 만들어보겠습니다.

nodejs의 홈페이지의 about의 코드를 복사 붙여넣기 하자.

```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

인터넷의 동작 방법

우리 수업에서 다룰 것
* 서버
* 클라이언트
* ip
* port

컴퓨터와 컴퓨터가 인터넷을 통해서 연결되서 여러가지 협력적인 작업을 처리하게 되었다.

클라이언트 = 고객, 갑

서버 = 을

요청하고 응답하는 요청하고 제공하는 관계에 있다. (갑을 관계)

우리 컴퓨터의 기준에서는 웹브라우저가 설치된 곳이 클라이언트

http://a.com 에 해당되는 것은 서버.

실제로 컴퓨터는 ip를 통해서 접속한다.

서버 = http://a.com

서버에는 여러가지 다른 서버가 설치 되있을수 있음.
* 데이터베이스 서버
* 채팅 서버
* 게임 서버
* 웹 서버

사용자가 a.com 에 들어왔을때 누가 응답할지를 어떻게 결정하는가?

컴퓨터에는 포트가 있음. 0번부터 65535개의 포트가 있음.

우리는 웹서버를 80번 포트에 실행함. 80번 포트를 웹서버에 리스닝 하게됨.

그리고 사용자가 이 서버에 접속할때.. http://a.com:80 이라고 입력하면

a.com을 찾고 a.com에 80번 포트를 연결 하게 되고. 80번 포트에 리스닝 된 웹서버에 요청하게 됨.

하지만 웹서버에 접속할때는 80번 포트를 생략할 수 있음. (기본적으로 포트를 입력하지 않으면 80번 포트에 연결됨)

http://a.com:1337 이라고 주소에 웹서버를 실행하려면 우리의 웹서버를 1337번에 연결해야됨.

이것이 포트라는 개념.

## 모듈과 NPM

본 수업은 애플리케이션에서 부품으로 사용할 로직인 모듈에 대해서 알아보고 모듈을 편리하게 관리하는 기술인 NPM을 사용하는 기본적인 방법을 알아봅니다.

const = 자바스크립트에 새로 추가된 상수.

모듈이라는게 존재.

모듈 = 부품

모듈을 가져올때 require를 사용.

NPM = Node Package Manager

HTTP, OS 등의 모듈을 사용했음 (Nodejs가 제공하는 모듈)

Date, String, Array (JavaScript가 제공하는 모듈)

기본적인 기능을 토대로 해서 엄청나게 다양한 무언가를 만들 수 있음.

타인의 모듈을 사용하는 방법. NPM

NPM = Node계의 앱스토어

NPM 역활
* 설치
* 삭제
* 업그레이드
* 의존성관리

[NPM사이트](https://www.npmjs.com)

[uglify-js](https://www.npmjs.com/package/uglify-js)

g를 붙이면 전역으로 독립적인 소프트웨어로 동작

g를 안붙이면 현재 프로젝트의 부품으로 사용.

사용법
* uglifyjs pretty.js
* uglifyjs pretty.js -m
* uglifyjs pretty.js -o pretty.min.js -m

[underscore](https://www.npmjs.com/package/underscore)

underscore를 우리껄로 가져오려고 함.

우리것도 패키지이므로 npm 상에서 현재의 디렉토리를 패키지로 지정해야됨(npm init)

npm init은 package.json을 만들어줌.

npm install underscore

npm install underscore --save = 온전하게 포함. 

cat package.json으로 내용을 표시하면 depenencies가 추가됨.

depenencies가 있으면 언제든지 여기 있는 모듈을 쉽게 가져올 수 있음.

## 콜백(callback) 함수

누군가에 의해서 호출되는 함수.

## 동기와 비동기 프로그래밍

동기와 비동기 (Synchronous & Asynchronous)

스마트폰의 동기화라는 뜻이 포괄적이로 비슷한 뜻.

빨래를 하고 설거지를 하고 청소를 해야 된다.

비동기 = 빨래하는 업체, 설거지하는 업체, 청소하는 업체가 있다면. 업체한테 전화해서 끝나면 알려달라고 함. 다른 업체에게도 마찬가지로.

전화하는데 1분이 걸리면 3분만에 모든 작업에게 전달은 가능함. 그리고 나중에 그 업체들에게 연락이 오게됨.

이메일을 발송하는 시스템을 만들었다. 동기적으로 발생하는 시스템이면 한명한명에게 이메일을 보냄. 한사람당 1초가 걸리면 만명이면 만초가 걸림.

하지만 비동기 시스템으로 만들면. 시스템에게 명령만 보내고 모든 업무가 끝나면 백그라운드에서 처리되고 완료되면 나에게 알려줌

파일읽기 readFile, readFileSync 

nodejs는 비동기적으로 어떤일을 처리한다가 nodejs의 철학이고 기본임.

## Express-도입

이렇게 하는건 편하긴한데.. 더 편한 방법이 있음.

프레임워크.. korea도 있음.

[Express](http://expressjs.com)

## Express-설치

홈페이지에 시작-설치하기에 보면 설치방법이 있음.

http://expressjs.com/ko/starter/installing.html

## Express-간단한 웹에플리케이션 만들기

메뉴얼을 자주 바야됨.

HelloWorld

http://expressjs.com/ko/starter/hello-world.html

app.js 같은 파일은 익스프레스에서 권장하는 메인 애플리케이션 이름

get이라는 메서드를 라우터라고 함. (라우팅 = 길을찾는다)

Routing (사용자, Router, Controller)

사용자의 요청과 controller을 중계해주는 역활

## 연결성

단어의 역활 의미

하나의 단어가 여러가지 의미를 가지게 됨. (유하사지만 다양한..)

단어 + 단어를 결합하여 새로운 의미를 만듬 (문장)

명사 10개 = 단어 10개

명사 10개 + 동사 10개 = 단어 20개 = 의미 100개

명사 10개 + 동사 10개 + 명사 10개 = 단어 20개 = 의미 1000개

무언가를 결합하고 조합하는건 정말 대단한 것이다.

JavaScript, Nodejs 관계

Nodejs 기본적으로 제공하는 기능
* FS
* HTTP
* OS

이 기능들을 자바스크립트와 결합해서 우리가 의도하는 프로그램을 만듬.

Module와 NPM의 관계

Router와 Controller의 관계

JavaScript, NPM, Router은 정말 중요하다.

## Express-정적파일을 서비스하는 법

프로그래밍 적으로 만든 정보 = 동적정보

사람이 만든게 언제나 똑같이 보이는것 = 정적정보

http://expressjs.com/ko/starter/static-files.html

app.use(express.static('public'));

## Express-웹페이지를 표현하는 방법

템플릿에 대한 예고편

웹페이지를 서비스 하는 방법

방법
* 정적인 파일 전달 (한번 만들면 언제든 똑같은 html)
* 동적인 파일 전달

정적 = public이란 디렉토리에 html파일을 놓는것. 정적인 파일은 실행중인 nodejs를 껏다 다시 킬 필요가 없음.

역슬래시를 하면 여러줄을 표시 가능함.. 근데 불편함. 그래서 그레이브엑센트(`)를 사용하면 여러줄 표시 가능.

동적인 파일은 노드를 다시 실행해줘야됨.(껏다 켜야됨)

정적인 파일로 html로 코드를 짜는게 편하지만 경우에 따라서 이렇게 못하는 경우가 있음.

그레이브엑섹트 안에 달러 중괄호 해주면 문자열안에 변수를 표현해주기 쉬움

동적으로 만들때는 자바스크립트 안에서 html코드를 작성하는건 좀 까다로움..

동적인것과 정적인것의 장점을 합친것 = 템플릿엔진.

## Express-템플릿 엔진 (Jade)

템플릿 엔진이란?

이것만으로도 독립적인 주제로 다룰 정도로 깊이가 있음.

개략적인 느낌만 전달. 

http://expressjs.com/ko/guide/using-template-engines.html

[jade](http://jade-lang.com)

jade 설정

  app.set('view engine', 'jade');
  app.set('views', './views');

그냥 jade를 하면 코드가 보기 이쁘지 않음.

이쁘게 출력하려면..?? 검색 jade express code pretty

  if (app.get('env') === 'development') {
    app.locals.pretty = true;
  }

jade에서 자바스크립트 문법을 사용할때 -를 앞에 붙이면 됨.

## Express-URL을 이용한 정보의 전달

사용자가 어떤 주소로 접근하냐에 따라 다른 결과를 사용자에게 보여줌.

우리의 웹 애플리케이션은 사용자의 조작에 따라 다른 결과를 만들어내는 애플리케이션이다.

* http://a.com/login
* http://a.com/home
* http://a.com/topic

이렇게 주소에 따라 다른 동작을 하지만. 주소 하나를 놓고 보면 언제나 똑같은 결과를 보여줌 (지금까지 보여준걸로는)

만약 topic라는 라우터를 가지고 있다면 topic에 접근할때 다른 결과를 보여주면 더 좋지 않을까?

그게 쿼리 스트링이다. http://a.com/topic?id=1 토픽이라는 주소에 id가 1인 정보를 전달해줌.

물음표 뒤에 나오는 정보를 웹에서는 쿼리 스트링이라고 한다.

Express의 API를 보고 이해해야됨..

http://localhost:3000/topic?id=1&name=egoing

쿼리스트링으로만으로도 충분하다.

하지만 쿼리스트링 없이 깔끔한 url을 통해서 제어 할수 있음. 이런걸 semantic URL이라고 한다.

의미론적 url

https://en.wikipedia.org/wiki/Semantic_URL

최근에 현대적인 애플리케이션은 이런식의 url형식을 띔

## Express-POST 방식을 이용한 정보의 전달

GET vs POST 

post방식을 배울 예정.

애플리케이션을 접속함. 사용자의 요청을 애플리케이션이 응답해줌.

기본적으로 웹브라우저에 주소를 입력해서 정보를 가져오는건 get 방식.

쿼리스트링을 줘도 get 방식임. get 방식은 우리가 어떤 정보를 서버에 요청해서 가져오는 것

post 우편물을 보낸다. 어떤 정보를 전달한다. 사용자의 정보를 서버로 전달하는 기능도 있음.

글을 작성하면 서버로 글을 전송하거나 사용자의 정보를 서버로 전송할때. 그게 바로 post

post 방식의 body 사용하려면 body-parser 모듈이 필요(미들웨어)

```  
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
```

언제 post를 쓰고 get을 쓸까? 정보에 대한 주소를 나타낼때는 url에 모든 정보가 있어야됨.

아이디 로그인등의 url상에 정보가 표시되지 않는 방식인 post 방식을 써야됨.

하지만 본질적으로 get,post는 둘다 불안정한 기술임. https등을 사용해야됨(ssl)

굉장히 큰 정보의 경우 get 방식은 정보를 버릴 수 도 있음. 전송할 데이터가 많으면 post

## 팁-Nodejs를 자동으로 재시작

여러분이 코드를 바꾸면 node가 알아서 감지를 못해서 껏다 켜야됬음

[supervisor](https://www.npmjs.com/package/supervisor)

설치 

npm install supervisor -g

실행

supervisor app.js

세이브를 하면 자동으로 꺼졌다 켜짐. 이런 기능을 와치라고 함.

만약 처음부터 supervisor를 가르쳐줬으면 더 편했겠지만 편하단 느낌을 못받았을듯. 원래 그런거라 생각하니까.

하지만 우리가 supervisor없이 애플리케이션을 동작하니까 귀찮은거다.. 귀찮음을 충분히 느꼈을때 이 도구를 내미니 굉장히 행복하다.

다른 것들도 마찬가지다. 아직 자신의 삶의 맥락에서 일의 맥락에서 필요하지 않은 도구를 처음부터 다루는건 그 도구와 멀어질 수도 있을 것 같다.

## 웹 애플리케이션 제작

여기서는 전형적인 웹에플리케이션을 제작하는 방법을 알아봅니다.

현대적인 웹에플리케이션은 정보를 저장하는 공간으로 데이터베이스를 사용합니다만 우리는 수업의 난이도를 조절하기 위해서 배우기 쉬운 파일을 사용합니다. 데이터베이스를 활용하는 수업은 뒤에서 다시 다루겠습니다. 

초심자에게는 많은 시간이 걸릴 수 있습니다. 충분한 시간을 확보하고 수업에 참여해주시면 좋겠습니다. 

### 오리엔테이션

사용자로부터 어떠한 정보를 입력받아서 그것을 서버에 저장하고, 사용자가 필요한 정보를 요청하면 그것을 제공하는 전형적인 웹 애플리케이션을 만드는게 목적.

우리의 가장 중요한 관심사는 저장하는 부분. 데이터가 위치하는 부분. 현대적인 웹 애플리케이션은 실제로 사용자가 등록하는 정보를 데이터베이스에 저장 함.

하지만 우리가 만드는 것은 데이터베이스가 아닌 파일에 저장을 할 것입니다. 파일도 일종의 데이터베이스라고 할 수 있음.(가장 원초적인..)

파일에 데이터를 저장하는 이유는 파일이 삽과 같기 때문에.. 예를 들면 삽이 있고 포크레인이 있으면 어떤걸 선택할까?

많은 분들이 포크레인을 선택하겠지만 포크레인이 다 좋은 건 아니다. 포크레인을 다룰려면 배워야 된다. 

삽같은 경우에는 보자마자 쓸 수 있고 어디서든 쓸 수 있다.. 파일을 제어하는 건 쉽다. 잘 제어하는건 어려워도 막 제어하는건 쉬움.

궁극적으로는 데이터베이스에 저장할 것이지만 중간다리 역활을 두고 싶어서 파일로 저장하는 방법을 택함.

완벽한 애플리케이션이 아님. 현실에서 사용하는건 반대임. 데이터베이스까지 궁극적으로 가자.

### 라우팅

본격적으로 웹 애플리케이션을 만들어보자.

우리의 애플리케이션은 데이터를 파일에 저장해서 파일 기반이라고 할 수 있음.

우리 애플리케이션의 메인 파일을 app_file.js로 만들 예정임.

### 본문저장

### 글 목록 만들기

## 파일 업로드

여기서는 사용자가 업로드한 파일을 받아서 저장하는 방법에 대해서 알아봅니다.

사용자가 전달하는 데이터는 크게 2가지
* 텍스트
* 파일

[multer](https://github.com/expressjs/multer)

### multer 심화

메뉴얼에 나와있는데로 하면 됨. 사용 설명서를 보고 사용하면 됨.

사용자로 하여금 높은 자유도를 주기 위해 콜백을 사용 함.

## 데이터베이스

본 수업에서는 데이터베이스를 이용해서 웹에플리케이션을 제작하는 방법을 알아봅니다.

다양한 종류의 데이터베이스 버전으로 수업을 구성할 예정입니다. 

원하는 데이터베이스를 선택하셔서 수업을 이수하시면 됩니다. 아래는 현재 제공되고 있는 데이터베이스 수업입니다. 

Orientdb

본 수업을 이수하시면 아래와 같은 기능을 가진 웹에플리케이션을 제작하실 수 있게 됩니다. 

정보 산업에서 데이터베이스의 위상은 두뇌이자 심장이다. 중요하다.

데이터베이스는 특정한 제품을 아울르는 제품군이다.

관계형 데이터베이스 
* ORACLE
* MYSQL

세상이 복잡해지고 정말 다양한 곳에 정보시스템이 사용되면서 관계형 데이터베이스만으로는 수용하기 어려워 다양한 데이터베이스가 출현됨.

NoSQL이라는 운동이 일어남. 과거에는 굉장히 어려운 일이었지만 다양한 형태의 데이터베이스 출현으로 과거에 비해 쉬워짐.

데이터베이스를 처음 배우는 사람이면 관계형 데이터베이스는 기본적으로 알아야 됨.

### Orientdb 소개 및 기본 사용법

#### Orientdb로 웹에플리케이션 제작 1 : 소개

[Orientdb](http://orientdb.com/orientdb/)

Orientdb는 우수한 성능과 독특한 특성을 가지고 있음.

데이터베이스가 주장하는 것들이 사실 그대로라면 굉장히 인상적인 데이터베이스다.

Orientdb 특징
* 빠르다.
* 그래프 데이터베이스를 제공
* 다큐멘트 데이터베이스를 제공 (문서형 어떤 하나의 문서를 저장하는 느낌 정보를 훨씬 유연하게 저장)
* 자체적으로 사용자 인증 체계를 가지고 있음(일종의 보안) 행단위로 사용자를 구분할 수 있음
* NoSQL 이지만 SQL을 사용할 수 있음
* Multi-Master Replication(여러개의 쓰기 작업을 두는 데이터베이스를 둘 수 있다.)
* Sharding(자동으로 샤딩 해줌)

#### Orientdb로 웹에플리케이션 제작 2 : 설치

기본적으로 자바가 필요함 자바 jdk 설치후

orientdb 다운받고 압출풀고 적당한 곳에 두자.

localhost:2480에 접속하자. 기본적으로 제공하는 관리자 화면임.

o2 데이터베이스 생성.

#### Orientdb로 웹에플리케이션 제작 3 : 기본 사용법

엑셀도 일종의 데이터베이스 컬럼을 정의함 그게 스키마.

테이블 = 클래스(오리엔트디비에서) 프로퍼티는 테이블의 컬럼 같은 거임

Mandatory 체크를 하면 반드시 이정보는 사용자가 입력을 해야됨.

구조를 정하면 스키마 풀.. 구조가 없으면 스키마 리스 혹은 조합해서.. 스키마 믹스.

#### Orientdb로 웹에플리케이션 제작 4 : orientjs 설정

[orientdb](https://github.com/codemix/oriento)

#### Orientdb로 웹에플리케이션 제작 5 : SELECT

데이터의 입력과 출력

* 추가
* 수정
* 삭제
* 읽기

#### Orientdb로 웹에플리케이션 제작 6 : INSERT & UPDATE & DELETE


### Orientdb로 웹에플리케이션 구현

#### Orientdb로 웹에플리케이션 제작 7 : 구현 계획

전체 흐름

get('topic/') view.jade
get('topic/:id') view.jade
get('topic/add') add.jade
 post('topic/add')
 get('topic/:id')
get('topic/:id/edit') : edit.jade
 post('topic/:id/edit')
 get('topic/:id')
get('topic/:id/delete') : delete.jade
 post('topic/:id/delete');
 get('topic/');

#### Orientdb로 웹애플리케이션 제작 8 : 읽기 1 - 글목록

orientdb는 뭔가 웹과 잘 안맞음 #과 같은 특수기호때문에..
이스케이핑이 필요.. encodeURIComponent
json 객체에 접근할때도 .이 아닌 대괄호를 사용해야되는 경우도 있음.
```
topic['@rid'] // @괄호 때문에 .접근 불가.
topic.title // == topic['title]
```

#### Orientdb로 웹에플리케이션 제작 9 : 읽기 2 - 상세보기

jade 문법 중에도 if els가 있음 

그리고 태그없이 파이프표시(|)를 사용하면 글 작성 가능

#### Orientdb로 웹에플리케이션 제작 10 : 글추가

이전 시간에 저장되어있는 레코드를 읽어와 화면에 표시하는 방법을 배움

데이터는 입력 출력 2가지가 본질 

라우터의 순서는 경우에 따라 중요할 수 있음.

#### Orientdb로 웹에플리케이션 제작 11 : 글편집 1

#### Orientdb로 웹에플리케이션 제작 12 : 글편집 2

데이터를 다루는건 굉장히 중요하다.

update 인데 where를 안했다? 그러면 모든 데이터가 다 바뀌고

delete 인데 where를 안했다? 전부 다 삭제된다.

#### 편집 구현 정정


#### Orientdb로 웹에플리케이션 제작 13 : 글삭제

데이터 삭제 까지만 하면 정말 높은 봉우리 까지 올라간거임.

검색엔진은 링크를 타고 페이지를 탐색함. 근데 만약 글 삭제의 yes를 링크로 만들면

검색엔진이 yes 버튼을 타고 들어가고 삭제 명령이 들어감. 그 글들이 싹 지워지는 심각한 문제가 생길 수 있음.

그런 문제 때문에 삭제 기능 처럼 어떠한 명령을 컴퓨터에게 내리는건 반드시 post 방식을 사용해야 된다.

### MYSQL 소개 및 기본 사용법

#### MySQL 소개

mysql 성장배경 = 웹

수많은 웹 애플리케이션이 등장하면서.. 무료인 mysql을 찾게 됨.

무료이며 openSource 그리고 성능도 그럭저럭 괜찮았었던..

Apache + php + Mysql 의 3대장이 합쳐져서 굉장히 많은 웹 애플리케이션이 만들어졌음.

mysql을 오라클이 먹음.. 그래서 mysql을 만든 사람이 mariaDB를 만듬..

굉장히 진보적인 기능들을 굉장히 탑재하면서 발전함. 그리고 mysql과 호환도됨!!!

mysql을 mariaDB로 바꾸면 한줄의 수정없이 교체 가능. 반대도 가능함.

[mysql](http://www.mysql.com)

아마존에서도 오로라 라는 새로운 DB를 만들었고 mysql과 호환이 가능하다고 함.

mysql의 춘추전국시대가 시작됨. mysql이 하나의 제품에서 어떤 표준으로 넘어가는 과정이 아닌가 싶음.

mysql은 굉장히 뜨거운 DB임.

#### MySQL 설치 - 맥 (OSX)

고민이 됨. 쉬운 방법과 어려운 방법.

일단 쉬운 방법으로 설치..

[bitmami](https://bitnami.com/stack/mamp)

이거 말고도 homebrew를 통해서도 설치할 수 있음.

아니면 공식 홈페이지에서 다운 받는것도 좋은 방법임.

선택해서 하세요. mysql 포트는 3306

맥은 컴퓨터를 끄고 나면 기본적으로 아파치나 mysql이 꺼지므로

컴퓨터를 키면 다시 스타트 해줘야됨. 

/Applications/mampstack-5.6.23-0/ 경로의 manager-osx.app 실행

mysql이 잘 실행되는 지 확인하려면 터미널을 키고

/Applications/mampstack-5.6.23-0/mysql/bin

./mysql -uroot -p 하면됨

#### mysql 구조

가장 기본적인 단위는 table

같은 데이터의 그룹이 있음.

한줄을 행이라고 함(row or record)

수직으로 된것은 열이라고 함(collum)

전체를 테이블이라고함.

예를 들어 테이블의 이름으로 topic, user, comment 등..

애플리케이션이 복잡해지면 하나의 테이블로 모든 정보를 표시할 수 없음.

정보가 추가됨에 따라 다양한 테이블이 하나의 앱에 사용됨.

같은 앱내에 사용되는 테이블을 그룹핑해서 관리할 필요가 생김.

연관된 테이블을 묶어 데이터베이스로 묶어줌. 

그리고 데이터베이스에 예를들어 o2라고 이름을 지정해줌..

데티어베이스라고 하는것이 서로 연관된 테이블들의 집합 분류 등이라고 불림

데이터베이스는 일반적으로 하나의 앱이 하나의 데이터베이스로 대응.

데이터베이스를 한번더 묶으면 데이터베이스 서버라고 부름 (데이터가 위차하는 컴퓨터)

사용자가 데이터베이스에 접속하면. 

ex) opentutorials.org:3306에 접속하면. 일단 서버에 접속을하고..

자신의 아이디와 패스워드로 인증을 하고, 데이터베이스를 사용하겠다고 컴퓨터에게 알려주고.

그 데이터베이스에 속한 테이블을 사용함..

#### MYSQL 사용하기

아직은 순수하게 mysql만 사용할 것이다.

mysql에 접속한다 (터미널에서)

./mysql -uroot -p
./mysql -hlocalhost -uroot -p
./mysql -hlocalhost -P3306 -uroot -p

title       | description     |author
------------|-----------------|-------------
JavaScript  | JavaScript is.. | egoing

**데이터베이스 생성**
```
CREATE DATABASE o2 CHARACTER SET utf8 COLLATE utf8_general_ci;
```

**데이터베이스 사용**
```
use o2;
```

**테이블생성**
```
CREATE TABLE `topic` (
`id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `author` varchar(30) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

데이터베이스는 처리 속도가 굉장히 중요함. 그래서 콘솔에 시간을 보여주는 것임.

**데이터 삽입**
```
INSERT INTO topic (title, description, author) VALUES('JavaScript','Computer language for web.', 'egoing');
INSERT INTO topic (title, description, author) VALUES('NPM','Package manager', 'leezche');
```

auto_increment를 설정하면 알아서 숫자를 부여함.

auto_increment를 설정한 id는 식별자의 역할을 함. 식별자는 중요하다.

#### MySQL - UPDATE & DELETE

데이터를 변경하는 것.. 수정 삭제

**데이터 수정**
```
UPDATE topic SET title='npm' WHERE id=2;
```
UPDATE에서 where 를 깜박하면 인생이 바뀜. (망함)

sql은 굉장히 위험한 일을 함.. 서버 쪽으로 오면 언제나 겸손해야되고 경건 해야 됨.

**데이터 삭제**
```
DELETE FROM topic WHERE id=2;
```

까먹어도 됨.. 검색하면 됨. 자주 쓰면 알아서 외워짐.

#### node-mysql 1 : 접속

javascript로 mysql을 제어하는 방법을 살펴볼 예정.

살펴본 후에 그것과 웹 애플리케이션을 만들어서 사용자의 데이터를 서버에 저장하고 전송하고..

해서 데이터베이스 시스템을 이용하는 웹 애플리케이션을 만드는걸 배울거다.

여러가지가 있겠지만.. 가장 유명한것은

[node-mysql이다.](https://github.com/mysqljs/mysql)

#### node-mysql 2 : SELECT & INSERT

가장 기초적인 명령들..

읽기, 쓰기, 등..

insert id 중요함.

#### node-mysql 3 : UPDATE & DELETE

등록된 데이터를 수정하고 삭제하는것을 자바스크립트로 할 예정.

### MySQL로 웹에플리케이션 구현

#### 글 목록

get('topic/') : view.jade
get('topic/:id') : view.jade
get('topic/add') : add.jade
  post('topic/add')
  get('topic/:id')
get('topic/:id/edit') : edit.jade
  post('topic/:id/edit')
  get('topic/:id')
get('topic/:id/delete') : delete.jade
  post('topic/:id/delete')
  get('topic/')

파일 -> mysql 변경

그리고 선택된 글에 대한 수정과 삭제 작업을 추가 할 예정

#### 글 상세 보기 구현

#### 글 추가 기능 구현

#### 글 편집 기능 구현 1

#### 글 편집 기능 구현 2

### 글 삭제 구현

### http

Hypertext Transfor Protocole

time berners-lee 

Web Browser와 Web Server가 서로 데이터를 주고 받음.

웹브라우저는 웹서버에게 어떤정보를 요청(request)

웹서버는 요청에 따른 응답(Response)

웹브라우저와 웹서버는 http라는 통신방법을 사용해 정보를 주고 받음.

request header와 response header와 같은 눈에 보이지 않지만 밑바닥에서 저 아래에서 

풍부한 정보를 주고 받음. 그리고 이러한 프로토콜을 몰라도 웹 애플리케이션을 만들 수 있지만.

가끔씩 생기는 문제가 있는데.. 그 문제가 해결이 잘 안되는 경우가 있음. 

웹 서버에서 제공하는 어떤 프로토콜의 헤더를 보고 문제를 해결 할 수 있어야됨.

이 순간이 마법이 기술이 되는 순간.

### cookie 1

#### intro

쿠키 = 과자라는 뜻..

기술적인 의미

웹 사이트 방문 하고 로그인 시, 다시 웹사이트 방문하면 로그인된 상태 유지.

http 통신 방식을 잘 들여다보면 마법같은 일.

http 프르토콜은 상태가 없다 (접속할때마다 이전에 접속했던 상태를 다음 접속이 알수 없다.)

워낙에 제한이 커서 넷스케이프(예전 웹브라우저 회사)에서 쿠키 기능을 만듬. 쿠키를 이용하면 로그인시 로그인 기록.. 쇼핑 카트 같은 기능을 사용할 수 있음.

쿠키 수업은 굉장히 큰 덩어리의 수업의 시작임. 쿠키 자체가 활용도가 높음. 쿠키를 기초로 해서 세션이라는 주제가 나옴. 세션을 기반으로 해서 인증(회원가입, 로그인 등)이라는게 나옴

인증이 없으면 우리가 할 수 있는게 대단히 축소됨. 인증과 관련된 내용의 가장 기초적인 부분이 쿠키임. 쿠키는 다음 주제로 넘어가는 중간과정이다.

#### Counter

cookie를 사용하려면 모듈을 깔아야됨.

[cookie-parser](https://www.npmjs.com/package/cookie-parser)

쿠키의 갑은 같은 url에서만 유효함

### cookie 2

#### Shopping cart 1

쿠키를 이용해 조금 더 현실적인 애플리케이션을 만들거임.

카트 기능 같은 경우 대부분 쿠키를 이용함.

#### Shopping cart 2

#### Shopping cart 3

쿠키는 서버가 사용자의 웹 브라우저에게 CRUD 하는 것이다.

#### Cookie & Security

보안과 관련된..

쿠키를 감청하면 볼 수 있다. 로그인과 관련된 쿠키라던지.. 사용자와 기밀한 쿠키같은경우. 도청당하면 

심각한 보안상의 구멍이 생김. 그리고 컴퓨터에 박혀있기 때문에 누군가에 의해 읽히면 굉장히 위험함.

쿠키를 주고 받을때면 https방식으로 통신하는게 좋다.

https 통신 방법이 가능하도록 여러가지 설정을 해야됨. 그럼 중간에 누군가가 감청해도 이해할수 없는 정보가 되서

훨씬 더 안전해짐.. 혹은 쿠키값 자체를 암호화 할 수 있음. cookieParser의 인자에 암호화 키값을 넣을 수 있음.

그리고 cookies -> signedCookies로 바꿈. 그리고 cookie에도 signed true를 넣어줌

쿠키는 아무리 암호화를 해도 어떤 문제가 일어날지 예측하기 힘듬.. 아이디와 비밀번호 같은 심각한 정보는 절대로 쿠키에 저장하지 않는다.

다른 대안이 존재함. 대안에 대해서는 다음에 살펴보자.

### Session 1

#### Session 1 : intro

세션은 쿠키를 보완한 것과 비슷..

쿠키는 웹브라우저가 설치되었다는 컴퓨터가 있다고 치고. 웹브라우저가 서버에 접속하면 서버는 웹브라우저에 응답을 하면서 쿠키로 모든 데이터를 저장 하게 됨.

이를 테면 쇼핑카트라고 하면 사용자가 어떤 제품을 카트에 담았는지 제품에 대한 목록을 전부 사용자의 컴퓨터에 저장.

만약 로그인 애플리케이션이면 로그인을 하고 사용자가 로그인에 성공하면 그다음에도 로그인을 성공할수 있도록 아이디 비밀번호를 심어놓을수 있음.

이런 방식은 여러가지 문제점이 있음. 그중에 가장 큰 문제점은 보안. 정보가 왔다갔다 하는것은 굉장히 부담스러운 일.

사용자의 컴퓨터에 기본적으로 심어져있으면.. 사용자가 없는 동안 누군가가 봐서 사용자의 정보를 탈취해 갈수 있음.

이러한 문제점을 개선하기 위해 쿠키가 가지고 있는 기능과 서버쪽에 데이터를 저장할 수 있는 데이터를 저장할수 있는 공간을 잘 조합해서

세션이라는 것이 만들어짐.

세션은 사용자의 컴퓨터가 있고 사용자가 서버에 접속하면 서버는 사용자의 컴퓨터에 마찬가지로 쿠키 방식으로 저장하는데.

이때 저장하는 데이터는 쿠키 방식과는 다르게 오직 사용자의 id 값만 저장함. 예를 들면 접속한 사용자를 abcde로 했다하면.. abcde라는 값만

사용자의 브라우저에 저장되고, 그 값에 해당되는 여러가지 정보는 서버쪽에 데이터베이스나 파일등에 저장된다. 실제 데이터는 서버에 저장되있고..

사용자의 컴퓨터는 식별자만 저장됨. 사용자가 서버에 접속했을때 요청으로 그 식별자를 전송하면 그 식별자에 해당되는 실제 데이터를 사용할 수 있다.

#### Session 2 : Counter Applications

쿠키와 함께 세션이 어떤 차이가 있는지 살펴볼 예정.

세션 방식은 쿠키 방식과 어떻게 다른지 차이점을 통해서 쿠키와 세션을 잘 이해할 수 있도록 한다.

connect.sid가 같으면 같은 사용자로 간주됨.

사용자의 컴퓨터 자체에 쿠키값이 저장되기 않기 때문에 훨씬 더 안전함. 세션 아이디 자체에는 의미있는 데이터가 없음.

물론 세션 아이디가 탈취되면 위험함..

#### Session 3 : Counter Application
```
npm install express-session --save
```

[express-session](https://github.com/expressjs/session)

express-session은 기본적으로 메모리에 저장함. 그래서 애플리케이션을 껏다 키면 세션 정보는 날라감.

그래서 express-session이 기본적으로 제공하는 메모리에 정보를 저장하는 컨셉은 개발용으로는 편리하지만 실제 서비스할때는

데이터베이스에다가 세션 데이터를 저장해야됨.

### Session 2

#### Session 4 : login 1

로그인 기능을 세션 기능을 이용해서 만들것.

로그인 애플리케이션이라고 하지만 취약점이 있을 가능성이 있으므로 그대로 사용하는건 권장하지 않음.

나중에 인증에 대해 배울때.. 그걸 사용하면됨.

이것은 세션이 무엇인가 이해하고 로그인이 기본적으로 어떻게 동작하는지 흐름을 파악하는데 주안을 두자.

#### Session 5 : login 2

실제로는 데이터베이스가 개입하겠지만..

근데 데이터베이스는 세상에 너무나 많고 그걸 다 다루려면 의미가 없고. 여러분도 힘들고 저도 힘들고..

그래서 데이터베이스 대신에 그냥 인증정보를 코드에 박을거임. 좋은 방법은 아니지만 수업에 복잡성을 낮추기 위해.

소스코드에 비밀번호를 담는건 언제나 나쁜 방식임.

#### Session 6 : login 3

#### Session 6 : login 4

이번 영상에서는 로그아웃 하는 방법을 알아볼 것.

여기까지 온거면 세션이랑 쿠키등을 알게되었음..

다음 파트에서는 세션이 현재 메모리에 저장되있는데.. 사용자의 세션 정보를 데이터베이스에 저장하는 방법등을 알아볼 예정.

### Session 3

#### Session 8 : Session store - file

메모리에 세션 데이터를 저장하는건 실제 서비스에선 사용안함.

실제 서비스는 파일이나 데이터베이스 같은 것을 사용함. 메모리가 아닌 영구적인 데이터 시스템에 저장 하는 걸 알아볼것.

이번 시간에는 파일에 세션 데이터를 저장하는 방법을 살펴볼 것이고. 그 방법을 파악하면 어떤 데이터베이스를 사용해도 비슷한 방법으로 세팅 하면됨.

일단 검색어를 알려줌. 

express session store file

[session-file-store](https://www.npmjs.com/package/session-file-store)

```
npm install session-file-store --save
```

앱을 실행시키면 세션데이터를 저장할수 있는 디렉토리를 하나 만듬..

그디렉토리의 이름은 sessions임 ->실행하면 실제로 생성되는지 확인

이제 애플리케이션을 껏다 켜도 상관없음..

#### Session 9 : Session store - mysql

express session store mysql

[express-mysql-session](https://www.npmjs.com/package/express-mysql-session)

애플리케이션이 실행되면 sessions라는 테이블을 생성시켜주고.. 그 테이블에 세션 정보를 저장하게 됨.

애플리케이션을 다시 시작해도 제대로 실행이됨. 휘발성이 아니고 데이터베이스에 저장되기 때문에.

세션을 저장할때 저장이 끝나기도 전에 리다이렉션을 하면 저장이 안될수도있음.

그래서 세션이 저장될때까지 기달려주는 것을 처리 해줘야됨.
```
req.session.save(function()
```

#### Session 9 : Session store - orientdb

[cpmmect-oriento](https://www.npmjs.com/package/connect-oriento)

Session이라는 테이블이 생김 애플리케이션을 실행하면서 생성됨.

로그인 하는 부분에서. 리다이렉션을 해서 웰컴으로 보내주는데..

세션 데이터가 저장되기 전에 리다이렉션이 됨..

세션 객체는 save라는 함수가 있고 그 save함수에 콜백을 주면.. 세션이 스토어에 저장된 후에

콜백이 호출됨.. 그리고 리다이렉션 하면됨.

### Multi user (다중 사용자)

#### intro(소개)

다중 사용자 시스템이 들어오면 시스템이 급격히 복잡해짐.

다중 사용자 시스템은 어떻게 바뀌는가?

배열을 통해 사용자의 데이터를 관리할 예정.

이후에 데이터베이스로..

애플리케이션을 끄면 휘발되는 애플리케이션을 만들 예정.

#### register(회원가입)


#### authentiction(인증)

nodejs는 비동기 방식의 프로그래밍을 하기 때문에 사람의 의식과 다르다.

그래서 어떻게 보면 쉽지 않음.

### Security - Password (비밀번호 보안)

#### Security Password 1

우리가 가진 비밀번호가 노출되면 우리 사용자들은 큰 불편을 겪게 됨. -> 우리의 비즈니스가 끝장남

사용자의 비밀번호가 노출되면 안됨 (최악의 상황에 차선의 상황을 지킬 수 있도록 노력해야됨)

app-multi-user-file.js 어쨌든 우리가 만든 애플리케이션은 사용자의 정보가 들어있는데.

111이라는 비밀번호가 적혀있음. 이 비밀번호를 탈취하면 우리의 애플리케이션에 로그인할 수 있을 뿐만 아니라

이 비밀번호를 다른데서도 사용하면 다른 웹사이트 조차 공격당할 수 있음.

이 비밀번호가 공격자에게 탈취되더라도 원래의 비밀번호가 111인것을 공격자가 알 수 없으면서.

사용자가 로그인을 할 수 있겠는가??

암호화 기법과 관련.

#### Security Password 2 : md5

암호화라는 주제는 다소 생소할 수 있다.

암호화를 하기 위해서 여러분이 지켜야 될 몇가지가 있을 뿐이지. 원리를 모른다고 암호화를 못하는 건 아니다.

암호화를 해야되는 이유. 암호화를 하는 방법 정도만 피상적으로 일단 이해해도 됨. 원리 적인 측면은 피상적인 이해를 하고.. 

나중에 원리적인 이해를 하면됨. 하지만 중요하다.

```
npm install md5
node
var md5 = require('md5');
md5
->[Function]
md5('javascript')
->'de9b9ed78d7e2e1dceeffee780e2f919'
```
단방향 암호화 방법. md5는 암호화로서의 가치가 더이상 없음

과거에는 어쨌든 단방향 암호화 기법으로 사용되었음.

111을 단방향으로 암호화를 시켜 풀수없게..

111에 대한 암호화된 값이 나옴 해쉬라고도 함 => '698d51a19d8a121ce581499d7b701668'

어떤 서비스가 비밀번호를 암호화 하지 않고 저장하면 소송을 당함.

md5 dictionary online

https://crackstation.net/

md5가 어떠한 값인지 나옴. 사람은 몰라도 기계는 안다. 그러면 이건 뚫림

이러한 상황에서 어떻게 하면 이 상황을 완화 할 수 있을까? 다음 시간에 알아보자

#### Security Password 3 : salt

```
var md5 = require('md5')
->undefined
var salt = 'qgiejwj121425@%^dg';
->undefined
var pwd = '111';
->undefined
md5(pwd+salt)
->'62e55e1613c0dfe741ebf72350b5fb08'
```

salt값에 우리의 비밀번호를 저장했기 때문에 알기 힘들어짐.

조금 더 보안적으로 이 상황을 향상시킬 수 있는 방법.

사용자가 입력한 원래 비밀번호에다가 어떠한 부가적인 정보를 추가해 원래의 비밀번호가 무엇인지 알기 힘들게 만드는 것을 salt라고 한다.

salt 값이 같으면 만약 컴퓨팅 파워가 강한 컴퓨터를 이용하면 대입을 하다 보면.. 찾아낼 수 있다. 그리고 찾아낸 값과 똑같은 값은 같은 비밀번호다.

한명이 털리면 나머지도 다 털린다. -> 사용자마다 다른 salt를 적용하자.

md5는 굉장히 훌륭한 알고리즘을 가지고 있지만. 더이상 md5로 암호화를 하지 않음.

현시점에서 사용하기 괜찮은 암호화는 sha이다.

```
npm install sha256 --save
```

사용자의 해쉬값은 완전히 다른 값을 가지므로 한사람이 털려도 한사람이 털리지는 않는다.

#### Security Password 4 : PBKDF2

단방향 해쉬. 원래의 방식으로 다시는 복원할 수 없는 암호화 방법을 살펴봄.

그리고 salt를 통해서 원래의 값이 무엇인지 좀더 알아보기 힘든 방법을 살펴봄.

키스트레이칭?? 암호화 한걸 한번더 하고 한번더 하고 한번 더하는 암호화 방법.

이런것들을 우리가 처리하기가 상당히 어려운 일이므로 이런것들을 제대로 해줄 수 있는 함수가 몇가지가 있음.

그 것들중에 하나인 것이 pbkdf2임. 이런 함수를 통해 방금 말한 기법들을 잘 할 수 있게 해주는 함수.

[pbkdf2](https://en.wikipedia.org/wiki/PBKDF2)

검색어 : nodejs pbkdf2 password npm

[pbkdf2-password](https://www.npmjs.com/package/pbkdf2-password)

```
var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();
 
hasher({password:'111'}, function(err, pass, salt, hash) {
  console.log(err, pass, salt, hash);
});
```

암호화를 할때마다 다른 값이 나옴.

요기서 나온 값은 어마어마하고 이 값이 원래 어떤값인지 추정하기는 힘들다.

#### Security Password 5 : PBKDF2

암호화 함수를 통해서 사용자의 비밀번호를 암호화 햇음.

#### Security Password 6 : register

사용자 등록을 할때 pbkdf2 방식으로 사용자의 비번을 저장하는 방법을 알아볼것임.

supervisor 로 실행하면 문제가 일어날수도 있음? (users push 해주는부분)

### passportjs

#### Passport Introduction(패스포트 소개)

인증(Authentication)을 쉽게 구현할수 있도록 보완된 모듈

결과적으로 인증을 쉽게 할 수 있지만.. 패스포트 자체는 인증을 직접 구현하는 것보다 어려울 수 있다.

오늘 날은 인증을 한가지 방법으로 하지 않는다. (아이디 패스워드 방법도 있지만, 페이스북, 구글, 아마존, 트위터 등 공식력 있는 웹 애플리케이션을 이용해서 인증하는 방법도 있다.)

Federation Authentication 이라고 한다.(인증체계 연합, 타사인증) 

패스포트를 사용해서 얻을 수 있는 효용? 페이스북 구글등 다양한 인증 방식을 여러분의 애플리케이션을 수용해야된다면...

각각의 기관과 업체에 맞게 코드를 작성해야되는데 그게 제각각이면 굉장히 코드가 어려워짐. 그럴경우 패스포트를 사용하면

구현 방법을 동일한 코드로 혹은 거의 비슷한 코드로 작성해서 애플리케이션에 수용할 수 있다. 애플리케이션의 복잡도가 낮아지고

시간과 노력이 훨씬 단축 된다.

#### Configuration(설정)

[passport](http://passportjs.org/)

여러가지 인증방식을 통합 (통합이라는것은 언제나 얻는것과 잃는 것이 있다.)

인증이라는 것 자체가 절차가 다소 긴 편이다. 여러분이 기억해야될 것들이 많게 느껴질 수 있다.

한번 두번 세번 하다보면 대체적으로 어떻게 돌아가는지 구현 할수 있다.

[passport config](http://passportjs.org/docs/configure)

strategies 보면 여러가지 전략등을 볼 수 있다. facebook이면 페이스북 모듈 설치 구글이면 구글 모듈 설치 등.

```
npm install --save passport-local
```

#### Route

패스포트는 공통적인 체계가 있음.

패스포트의 전략 중 로컬이라는 전략을 쓸 예정.

Form을 보자..

username과 password는 반드시 이 변수명으로 해줘야됨.

passport의 use에 전략을 등록 해줘야됨.

done의 세번째 인자(메시지)는 라우터의 failureflash와 관련 있음.

#### Serialize

```
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
```

콜백함수가 실행되도록 약속이 되있음.

자연의 법칙이 아니고 인간들의 약속일 뿐이다.

serializeUser에 done의 두번째 인자에 식별자를 넣어주면 됨.

우선 로그인시 실행 순서

1. LocalStrategy가 실행
2. serializeUser 실행
3. deserializeUser 실행

이제 웹페이지를 리로드 할때 deserializeUser가 호출됨.

serializeUser를 할때 두번째 인자로 준 값이 세션에 저장이 되고

다시 웹사이트에 접속할때 deserialzieuser가 호출되도록 약속되있고 세션에 저장되있는 인자가 첫번째 인자로 들어오기로 약속되 있기 때문에...

#### logout(로그아웃)

패스포트는 원래 익스프레스가 가지고 있지 않은 user를 만들어 줌.

#### review(복습)

패스포트를 적용하는것이 꽤 어렵고 복잡하다. 어렵게 느껴지는 것이 자연스럽다.

* 패스포트의 모듈을 가져옴
* 인증방식(전략)에 따른 모듈을 가져옴 (로컬, 페이스북, 구글 등)
* 우리의 애플리케이션에 패스포트 등록 app.use(passport.initialize()), app.use(passport.session()) 등..
* form에서 auth/login으로 패스포트 값을 넘겨주면 패스포트에서 인증을 해주는데..
* passport.use 를 통해 전략 추가 가능
* serializeUser, deserializeUser 등 선언
* serializeUser를 통해 세션에 저장됨.
* 저장된 세션 데이터로 deserializeUser가 호출. (저장된 사용자를 찾을 수 있음)
* req.user 의 객체가 패스포트에 의해 추가됨.

### Federation Authentication(타사 인증)

#### Intro (소개)

일반적을 인증 시스템을 구축하려면.. 로컬 방식이었음.

아이디와 패스워드를 사용자가 직접 입력해서 서버쪽에서 확인하는 방식.

타사 인증 방식을 이용하면 많은 사람들이 가입된 사이트 정보를 이용해.. (구글 페이스북 네이버) 인증을 해주는 방식

이렇게 인증을 처리할때 장점? 회원가입을 하기위해 복잡한 절차를 할 필요가 없다.

사용자의 정보를 보관하는 것은 굉장히 어려운 일이다. 사용자의 정보를 보관할 필요가 없다. (간단한 식별자만을 보관)

단점? 왠지 다른 서비스에 종속되는 듯한 느낌?

#### Facebook (페이스북 연동)

http://passportjs.org/docs

패스포트를 이용한 타사인증

[passport-facebook] (https://github.com/jaredhanson/passport-facebook)

페이스북에서 타사인증을 하려면 페이스북 앱이란 것을 만들어야 됨.

facebook developer 검색

개발자 등록

```
nm install passport-facebook --save
```

여러개의 타사인증 시스템을 동일한 형태의 코드로 관리해주는.. 진정한 패스포트의 가치.

#### Route

facebook 전략으로 동작

```
app.get('/auth/facebook', passport.authenticate('facebook'));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://www.example.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));
```

callbackURL 

타사인증을 받는건 상당히 보안적으로 위험한 일

여러가지 방법으로 이 서비스가 맞는지 상호간에 검증하는 과정

왜 라우터를 2개 등록해야되는지?

facebook 로그인 버튼을 누르면 페이스북 화면이 나오고 확인을 누르면 페이스북에서 콜백을 보내줌

#### login

profile 정보를 바탕으로 사용자를 추가 히면 됨.

#### facebook permission (페이스북 세부 권한 설정)

한가지 버그가 있었음.

페이스북 로그인 상태에서 애플리케이션을 끄면 계속 무한 로딩 되는 현상.

세션 폴더의 세션을 지워줘야됨.

```
app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: 'read_stream' })
);
```

이렇게 해도 email 정보가 안나오는데

```
profileFields:['id', 'email', 'gender', 'link', 'locale',
'name', 'timezone', 'updated_time', 'verified', 'displayName']
```

이걸 추가해야 됨
  
로컬 전략에서도 사용자의 이메일을 받아야되는 정보다.

상당히 어려운 내용이다.

심지어 우리는 비밀번호를 찾는 기능, 이메일 인증도 만들지 않았다.

힘들기 때문에 많은 사람들이 이 부분에서 포기한다. 여러분이 이걸 넘어서면 그만큼 힘을 갖게 되니까 힘드셔도 조금 만 더 힘내자.

### Auth - Orientdb

#### Intro

지금까지 세션은 파일에 저장 사용자의 정보는 메모리에 저장

사용자의 데이터를 데이터베이스에 저장할 것.

이번 시간에는 오리엔트디비로 지금까지 만든 애플리케이션을 전환할 예정.

사용자 테이블을 직접 만들어서 사용하는 방법을 구현할 것임.

오리엔트 디비에 user 클래스를 만듬


Name       | Type | Mandatory | Not_Null |
-----------|------|:---------:|:--------:|
authId     |STRING|     O     |    O     |
username   |STRING|     X     |    X     |
password   |STRING|     X     |    X     |
salt       |STRING|     X     |    X     |
displayName|STRING|     O     |    O     |

new index -> authId -> unique 설정.

#### Session store

세션은 파일에서 오리엔트디비로 변경.

#### Register(회원등록)

세션 스토어는 세션 스토어 이고

데이터베이스 핸들링은 별도로 처리 해야됨.

데이터베이스로 오리엔트디비를 사용하기 위해서..

#### login

#### federation auth (타사인증)


### Auth - MySQL

#### 소개

메모리에 저장했던 데이터를 MySQL에 저장하는 작업을 할 것.

일단 MySQL을 실행해야됨.

```
CREATE TABLE users ( 
    id INT NOT NULL AUTO_INCREMENT , 
    authId VARCHAR(50) NOT NULL ,
    username VARCHAR(30), 
    password VARCHAR(255), 
    salt VARCHAR(255),
    displayName VARCHAR(50),
    email VARCHAR(50) NOT NULL , 
    PRIMARY KEY (id), 
    UNIQUE (authId)
) ENGINE = InnoDB;
```

#### Session store

sessions 테이블에 정보가 저장됨.
```
SELECT * FROM sessions; 
```

#### Register (회원가입)

추가 -> 로그인 순서

```
SELECT * FROM users \G
```

#### Login

#### Federation Authentication (타사인증)

```
ALTER TABLE users ADD email VARCHAR(50);
```

### 정리정돈의 기술

분 수업의 하위 수업에서는 코드를 잘 정리 정돈하는 기술을 다룹니다.

#### jade - extends

http://jade-lang.com/reference/extends/

jade의 기능중 상속이란 좋은 기능이 있음.

우리의 add, view 는 다른 부분이 있고 같은 부분이 있다.

동일한 부분이 있음 다시 말해서 중복이 발생함.

중복을 해결할 여러가지 방법중 하나가 jade의 상속이다.

중복된 코드를 제거하면 유지보수의 편의성이 극대화 됨.

중복을 제거해서 가독서이 높아짐.

유사하게 사용할 수 있는 기능은 Includes 기능이다.

#### 사용자 정의 모듈 만들기

모듈에 대한 이야기를 할 것.

여러분이 모듈을 만들어서 재사용 할 수 있는 방법.

지금까지 작업한 내용이 복잡해진 상황이고 그 복잡도를 낮추기 위해서는 우리가 지금까지 만든 코드를 잘 정리전돈 할 필요가 있음.

재사용을 하기 위해서 모듈을 사용할 수 도 있지만 정리정돈을 하기 위해 모듈을 사용할 수도 있다.

모듈이 하나의 기능만 가지는 것도 좋지만 여러개의 기능을 가질 수 도 있다.

복잡해진 로직에서 서로 연관된 코드를 별도의 파일로 분리해서 잘 정리정돈 하자.

#### 라우트 분리하기

라우트가 많아짐에 따라 정리할 필요가 있다.

정리정돈 하는 방법을 살펴볼 것.

라우터가 많아져도 컴퓨터는 문제 없지만 사람은 문제가 있음 (보기 어려움)

우리 애플리케이션의 구조를 더 단순하게 해야된다.

원리를 몰라도 우리는 어떤 패턴을 발견할 수 있는 능력은 있기 때문에.. 이렇게 하면 이렇게 되는구나 하는 느낌으로 따라오면 됨.

http://expressjs.com/en/guide/using-middleware.html

항상 좋은 것은 대가가 따름

우리가 p1, p2를 별도의 파일로 빼냈음. 그렇기 때문에 p1은 완전히 고립된 상태가 됨.

p1 안에서 만들어진 변수나 함수는 p1을 사용하고 있는 app_routes에 영향을 주지 않기 때문에 문제 발생을 줄일 수 있다.

하지만 그거은 한편으로 불편함을 줄 수도 있다.

p1의 exports 부분을 함수로 고치고 app을 주입하는 방식으로 app_routes의 app을 사용할 수 있다.

#### 글작성 + 인증 (CRUD + Auth) - MYSQL 1

순서

인증과 관련된 작업 app_passport_mysql.js 복잡도를 낮추고

마찬가지 방법으로 crud에 해당되는 app_mysql.js도 복잡도를 낮추고

app_passport_mysql의 파일들을 app_mysql로 합치는 작업을 진행할 예정.

그래야 덜 복잡하고 오류가 밣생할 확률이 낮아짐.

이 과정에서 여러분은 소스코드의 복잡돌르 낮추는 것으로 인해 다른 소스를 합치는것이 얼마나 수월해지는가에 주목.

html을 문법을 jade 문법으로 변경 

[html to jade](http://html2jade.org/)

#### 글작성 + 인증 (CRUD + Auth) - MYSQL 2

라우트 분할 작업

#### 글작성 + 인증 (CRUD + Auth) - MYSQL 3(Auto config)

선택 mysql을 주입하던지 별도로 빼서 require 할지.

supervisor는 모든 자바스크립트를 와칭하지만 파일을 새로 추가하는 경우에는 그 파일을 알수 없으므로

껏다 켜야됨.

순서도 상당히 중요함.

뒤로 갈수록 정리정돈을 잘하는 방법을 체득해야 됨.

#### 글작성 + 인증 (CRUD + Auth) - MYSQL 4

이번 시간은 app_mysql.js의 복잡도를 낮출것

view 처리 -> 라우터 처리 -> 템플릿 처리

유지보수의 효율성이 극대화 됐다.

#### 글작성 + 인증 (CRUD + Auth) - MYSQL 5

라우터의 복잡도 낮추기

#### 글작성 + 인증 (CRUD + Auth) - MYSQL 6

패스포트는 로그인 성공시 req.user를 줌

뒤로 갈수록 정리정돈이 넘나 중요한 것.

다음 시간에는 이것을 좀더 화학적으로 결합해서 좀 더 의미있는 앱을 만들 예정.