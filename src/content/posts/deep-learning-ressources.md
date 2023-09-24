---
title: "Deep Learning Ressources"
pubDate: 2023-09-23
description: "A collection of great resources to learn about neural networks"
tags: ["deep-learning"]
---

# Deep Learning Ressources

In the past weeks, I got to dive into deep learning and found some very nice videos of people which deserve a lot of appreciation, for the value they contributed to people like me, trying to get into this field. As per now, I only have videos listed, because that's mostly what I use to learn. The videos are not ranked or sorted in any kind of way.

## Videos

### Andrej Karpathy's "Neural Networks: From Zero to Hero"

- [YouTube Playlist](https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ) (about 13 hours)
- [GitHub Repository](https://github.com/karpathy/nn-zero-to-hero)

I am curious to see, if I'll ever find someone that can explain backpropagation and the overall functionality of neural networks better than Andrej Karpathy. If you are not interested in watching 13 hours of YouTube videos, which will most likely take 20 hours if you are really trying to understand what Andrej is teaching, I recommend you to still watch the first video of the series. In the first video, he explains how the computation graph of neural networks are built and takes you though the process of building [micrograd](https://github.com/karpathy/micrograd). In the end, you'll have a pretty good understanding of what happens during forward propagation, loss calculation, backpropagation and optimization using stochastic gradient descent. 

### sentdex's "Neural Networks from Scratch in Python"

- [YouTube Playlist](https://www.youtube.com/watch?v=Wo5dMEP_BbI&list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3) (about 3.5 hours)
- [GitHub Repository](https://github.com/Sentdex/nnfs)
- [Website](https://nnfs.io/)

A very nice YouTube series about coding a neural network from scratch, without using deep learning library. It takes you through the most commonly used approaches for forward propagation, loss calculation and optimization for calssification problems. Unfortunately the series was never really ended and doesn't touch on backpropagation, which you can read about in the book that sentdex published (one of the best marketing strategy I've ever seen). The series has some great visualizations of what actually goes on in neural nets, when tweaking individual parameters.

### MIT's "Introduction to Deep Learning"

- [YouTube Playlist](https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI) (about 10 hours)
- [Github Repository](https://github.com/aamini/introtodeeplearning/)
- [Website](http://introtodeeplearning.com/)

A deep learning crash course from MIT. They fly through most of the topics at a speed, which really makes me wonder, if the people watching the lectures live, actually understand what's going on. It took me about 3 hours to get through the 1 hour long lectures, trying to understand and taking notes about what the lecture was about. In between the lectures, there are some Google Colabs which also took me quite some time to work through. The whole lecture is really up to date and talks about all the recent development in the deep learning and ai field in general. It touches on all the different topics and kind of neural networks that are relevant in the current time. They talk about transformers in the second lecture lol.

### 3Blue1Brown's "Neural Networks"

- [YouTube Playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) (about 1 hour)
- [Website](https://www.3blue1brown.com/topics/neural-networks)

Probably one of the first videos I have seen on neural networks. Of course 3Blue1Brown already covered the topic 5 years ago, which has led to the first video having over 14M views now. As per usual for 3Blue1Brown, the series has some amazing visualizations of the training process of neural networks and also touches on some of the maths behind it. It's a great entry point for people, who need some visual idea, of what happens under the hood and try to grasp, what happens when building a neural network to train on the MNIST dataset.

### Emergent Garden's "Neural network learns the mandelbrot set"

- [YouTube Playlist](https://www.youtube.com/playlist?list=PL_UEf8P1IjTjsbPasIQf3jWfQnM0xt0ZN) (about 1 hour)
- [GitHub Repository](https://github.com/MaxRobinsonTheGreat/mandelbrotnn)

If you want to get a feeling of what the approximation of a function looks like using a neural network, this is by far the best videos I've seen for it. Emergent Garden's channel is focused on visual artificial intelligence and has a nice [series about ai art](https://www.youtube.com/playlist?list=PL_UEf8P1IjTjd2SKwPwCfnqc_GxmmCRFh) too. The visuals he provides to show the neural network learn are really satisfying to watch.

### Algorithmic Simplicity's "Neural Networks"

- [YouTube Playlist](https://www.youtube.com/playlist?list=PLPz3O_BKtnTCoJlcRIrhtQ7CDewWhzI7x) (about 1 hour)

Quite a small YouTube channel compared to the ones above. In this 3 part playlist, he touches on some of the linear algebra behind convolutional neural networks and the transformer architecture.