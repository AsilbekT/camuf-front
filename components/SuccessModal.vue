<template>
  <div
    data-state="open"
    class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    data-aria-hidden="true"
    aria-hidden="true"
    style="pointer-events: auto"
  ></div>
  <div
    role="dialog"
    id="radix-:r3:"
    aria-describedby="radix-:r5:"
    aria-labelledby="radix-:r4:"
    data-state="open"
    class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-[425px]"
    data-id="4"
    tabindex="-1"
    style="pointer-events: auto"
  >
    <div
      class="flex flex-col items-center justify-center gap-4 py-8"
      data-id="5"
    >
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900"
        data-id="6"
      >
        <svg
          data-id="7"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6 text-green-500 dark:text-green-400"
        >
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      </div>
      <div class="space-y-2 text-center" data-id="8">
        <h2
          id="radix-:r4:"
          class="whitespace-nowrap text-lg font-semibold leading-none tracking-tight"
          data-id="9"
        >
          Success!
        </h2>
        <p id="radix-:r5:" class="text-sm text-muted-foreground" data-id="10">
          Your form has been submitted successfully. We will be in touch with
          you shortly.
        </p>
      </div>
      <div data-id="11">
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Close
        </button>
      </div>
    </div>
    <button
      type="button"
      class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-x h-4 w-4"
      >
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path></svg
      ><span class="sr-only">Close</span>
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
