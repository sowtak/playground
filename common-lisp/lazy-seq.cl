(defun naturals-form (n)
  (cons n (lazy-seq (naturals-form (+ n 1)))))

(defun naturals ()
  (naturals-form 1))

(prin1 (naturals))
