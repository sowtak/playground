require 'socket'

sv=TCPServer.new 2000
client=sv.accept
client.puts 'hi'
puts client.gets
client.close
