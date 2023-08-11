---
title: 'Another sample by ChatGPT'
description: "This is the first post of my new Astro blog."
tags: ["astro"]
prio: 0
---

# My Portfolio

## Project A: Machine Learning

In this project, I used several machine learning libraries:

- TensorFlow
- PyTorch
- Scikit-Learn

### Example of Python code with TensorFlow:

```python
import tensorflow as tf

model = tf.keras.Sequential([
  tf.keras.layers.Dense(64, activation='relu'),
  tf.keras.layers.Dense(10)
])

model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])
```

## Project B: Front-End Development

### Technologies Used

- React
- Redux
- HTML/CSS

### Sample of React code:

```javascript
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```

## Hyperlinks and Emphasis

You can also use **bold text**, *italic text*, and [hyperlinks](https://www.example.com).

## Images

![Another Example Image](https://www.example.com/another-image.jpg)

## Project C: Data Visualization

I used various tools for data visualization:

- Matplotlib
- Seaborn
- Tableau

### Code in R:

```r
library(ggplot2)

data <- data.frame(x = rnorm(100), y = rnorm(100))
ggplot(data, aes(x=x, y=y)) + geom_point()
```

## Lists

1. Item One
2. Item Two
3. Item Three

- Unordered Item One
- Unordered Item Two

## Conclusion

Feel free to use this file to test the rendering of Markdown on your website!