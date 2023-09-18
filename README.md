# docker-compose-bind-unbind
docker-compose 설정 파일은 설정 내용이 override 되도록 되어 있다.
```
docker-compose -f docker-compose.yml
```
를 통해서 컨테이너를 시작한 이후
```
docker-compose -f docker-compose.yml -f bind-port.yml
```
을 실행하게 되면, simple-httpd 서비스의 ports 설정이 override 되어, 내부의 container외 외부의 host의 포트를 binding 시키는 기능을 하게 된다.
