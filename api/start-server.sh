handler() {
  hypertunnel-server -p 54321 --token my-nogga-says-figga || true
}

build() {
	npm install -g hypertunnel-server
}
