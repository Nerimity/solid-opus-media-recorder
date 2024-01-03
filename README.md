<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=@nerimity/solid-opus-media-recorder&background=tiles&project=%20" alt="@nerimity/solid-opus-media-recorder">
</p>

# @nerimity/solid-opus-media-recorder

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

Opus ogg mic recorder to blob


## Quick start

Install it:

```bash
npm i @nerimity/solid-opus-media-recorder
# or
yarn add @nerimity/solid-opus-media-recorder
# or
pnpm add @nerimity/solid-opus-media-recorder
```


# Important
Before using this library, make sure to create a seperate `init.ts` file and import it from your main/index.ts.
```js
// init.ts
window.global ||= window;

// index/main.ts
import './init';

```



Use it:

```tsx
import { useMicRecorder } from '@nerimity/solid-opus-media-recorder'

const App = () => {
  const {record, stop} = useMicRecorder();

  const onRecordClick = async () => {
    console.log("recording...")
    const blob = await record();
    console.log("recorded", blob)
  }

  return (
    <div>
      <button onClick={onRecordClick}>Record</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}

export default App

```
