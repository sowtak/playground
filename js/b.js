console.log('fuck'.charCodeAt(0))

const compressedReadableStream = inputReadableStream.pipeThrough(new CompressionStream("gzip"))
