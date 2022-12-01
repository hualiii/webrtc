const offer = {"type":"offer","sdp":"v=0\r\no=- 6250543612870163465 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 51336 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 192.168.10.109\r\na=candidate:2489158225 1 udp 2122260223 192.168.10.109 51336 typ host generation 0 network-id 1\r\na=candidate:3935463625 1 tcp 1518280447 192.168.10.109 9 typ host tcptype active generation 0 network-id 1\r\na=ice-ufrag:oFeq\r\na=ice-pwd:YeMnqtDefgDS8aZHKQD8D1TN\r\na=ice-options:trickle\r\na=fingerprint:sha-256 0E:60:D3:28:A1:F8:60:5C:90:1B:08:76:86:8C:5C:C0:D7:F5:6B:C6:2D:8F:21:0B:E7:1F:11:4E:41:59:B9:B6\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}
const rc = new RTCPeerConnection()

rc.onicecandidate = e => console.log('new icecandidate sdp', JSON.stringify(rc.localDescription))

rc.ondatachannel = e => {
    rc.dc = e.channel
    rc.dc.onmessage = e => console.log('new meaasge from client!' + e.data)
    rc.dc.onopen = e => console.log('Connection opend!!!!!!!')
}
rc.setRemoteDescription(offer).then(e=>console.log('offer set'))

rc.createAnswer().then(a=>rc.setLocalDescription(a)).then(a=>console.log('answer created'))
