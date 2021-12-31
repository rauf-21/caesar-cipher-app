<script lang="ts">
  import { encrypt, decrypt } from './libs/cipher.js';

  let result = '-';
  let text = '';
  let shift = 0;

  function handleEncrypt(text: string, shift: number) {
    result = encrypt(text, shift);
  }

  function handleDecrypt(text: string, shift: number) {
    result = decrypt(text, shift);
  }
</script>

<main>
  <h1>Simple Caesar Cipher</h1>
  <label for="text">Text</label>
  <input
    type="text"
    id="text"
    bind:value={text}
    on:keyup={(e) => (text = e.currentTarget.value.toUpperCase())}
  />
  <label for="shift">Shift</label>
  <input type="number" id="shift" bind:value={shift} />
  <div>
    <button on:click={() => handleEncrypt(text, shift)}>Encrypt</button>
    <button on:click={() => handleDecrypt(text, shift)}>Decrypt</button>
  </div>
  <p>
    <b>Result</b> :
    {result}
  </p>
</main>

<style>
  main {
    width: 50vw;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    main {
      width: 95vw;
      margin: auto;
    }
  }

  button:hover {
    cursor: pointer;
  }
</style>
