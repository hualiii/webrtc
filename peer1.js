// RCT连接
const lc = new RTCPeerConnection()
// 数据频道
const dc = lc.createDataChannel('channel')

dc.onmessage = e => console.log('just got a message' + e.data)

dc.onopen = e => console.log('Connection opend!')


lc.onicecandidate = e => console.log('new icecandidate sdp', JSON.stringify(lc.localDescription))

lc.createOffer().then(o => lc.setLocalDescription(o)).then(a => console.log('set successful'))


const answer = {"type":"answer","sdp":"v=0\r\no=- 1550743077828637720 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 56930 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 192.168.10.109\r\na=candidate:1358746199 1 udp 2122260223 192.168.10.109 56930 typ host generation 0 network-id 1\r\na=ice-ufrag:NAmv\r\na=ice-pwd:ru2YcWY1cvxB5Y/20D57AfC8\r\na=ice-options:trickle\r\na=fingerprint:sha-256 89:74:42:D3:2D:A5:68:DC:BA:EB:23:66:C8:AC:E4:A7:FC:78:77:0C:7D:C9:DB:48:10:4E:1D:31:67:3F:9B:51\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}

lc.setRemoteDescription(answer)