(defun hello (name &key happy)
  "Say hello to `name'.`"
  (format t "hello ~a " name)
  (when happy
    (format t ":)~&")))

(hello (read) :happy (read))
