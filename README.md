# App Gym

##  브랜치 작업 환경

작업시작전 항상 최신화 유지 필요

```
$git pull origin main
```

이슈 생성 후 feature 브랜치 이동하여 작업

```
$git checkout -b feature/이슈번호

-b -> 경로를 만들면서 이동
```

작업후 commit
***커밋은 작업의 단위

```
$git add .
$git commit -m "메세지"
```

```
npx create-react-app .  ->  리액트 환경 설치
```

커밋들 리모트 서버로 올리기

```
$git push origin feature/이슈번호
```

pull request 코드 - 리뷰어 지정