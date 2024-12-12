import React from 'react'

function Login() {
  return (
    <section className="bg-gray-1 py-20 lg:py-[120px] dark:bg-dark">
    <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div
            className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center sm:px-12 md:px-[60px] dark:bg-dark-2"
          >
            <div className="mb-10 text-center md:mb-16">
              <a
                href="javascript:void(0)"
                className="mx-auto inline-block max-w-[160px] text-2xl text-white"
              >
                GitFlix
              </a>
            </div>
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-10">
                <input
                  type="submit"
                  value="Sign In"
                  className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                />
              </div>
            </form>
            
            <a
              href="javascript:void(0)"
              className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white"
            >
              Forget Password?
            </a>
            <p className="text-base text-body-color dark:text-dark-6">
              <span className="pr-0.5">Not a member yet?</span>
              <a
                href="javascript:void(0)"
                className="text-primary hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login