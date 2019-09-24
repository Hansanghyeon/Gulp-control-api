# Switch Api

⛓ NodeJS API서버를 활용한 명령어컨트롤(feat. playground-gulp)

screen package 컨트롤 `Switch Api - screen - gulp`

## Why did you start this project?

[playground-gulp](https://github.com/Hansanghyeon/playground-gulp)라는 프로젝트를 통해서 cli에 익숙하지 않은 사람에게 Slack을 통해서 에러 문구와 Gulp S3 upload 관련 상태를 푸시해주는 기능을 구현해서 cli에 들어가지 않아도 어떻게 진행되고있는지 알아 볼 수 있게끔 제작하였다. 하지만 중요한거는 Gulp watch 기능을 계속 실행하고있으면 VM에 무리가가서 다운되는 현상이있었다.

지금 내 상황에서 로드밸런스를 구성하기도 어렵고 그렇게 많은 서비스를 제공하지 않는데 무리를 일으키는 점에서 과부화를 최소하하기위해서 Gulp control api 프로젝트를 시작하게 되었다.

## Install

```shell
git clone https://github.com/Hansanghyeon/switch-api.git
```

전역환경변수 셋팅

```env
SLACK_SIGNING_SECRET="Your slack secret code"
```

## 🎉 Goal

해당 프로젝트는 NodeJS API서버에서 Gulp Watch를 컨트롤할 수 있는 기능이 모두 완료되면 끝난다!

이 목표를 위해 Fighting!