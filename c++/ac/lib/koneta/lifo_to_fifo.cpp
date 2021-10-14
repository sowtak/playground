#include <stack>

template <typename T> class MyQueue {
    std::stack<T> in, out;
    MyQueue() {}
    
    void enqueue(const T& v) {
        in.push(v);
    }

    T dequeue() {
        if (out.empty()) {
            if (in.empty()) {
                throw std::exception();
            }
            while (!in.empty()) {
                out.push(in.top());
                in.pop();
            }
        }
        T result = out.top();
        out.pop();
        return result;
    }
};
