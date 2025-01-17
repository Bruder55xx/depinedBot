import http from 'http';

export default function keep_alive() {
  http.createServer((req, res) => {
    res.write("I'm alive");
    res.end();
  }).listen(8080);
}
