<template>
    <div class="flex flex-col h-screen">

        <div class="bg-primary text-primary-content py-1">
            <div class="container navbar mx-auto">
                <NuxtLink to="/" class="btn btn-ghost normal-case text-xl bi-house">Order</NuxtLink>
                <NuxtLink to="/login" class="btn btn-ghost normal-case text-xl bi-person-circle">Login</NuxtLink>

                <form> 
                    <label for="locale-select" class="bi-flag-fill pr-1"></label> 
                    <select id="locale-select" v-model="$i18n.locale" class="select select-bordered select-sm w-full max-w-xs bg-primary"> 
                        <option value="en" selected>English</option> 
                        <option value="sv">Svenska</option> 
                    </select> 
                </form>
            </div>
        </div>

        <slot></slot>

        <div class="bg-primary text-primary-content py-1">
            <div class="container mx-auto text-2xl p-4">
                <div class='container'>
                    <div class='pb-2'>
                        {{$t('FooterText')}}
                    </div>
                    <hr class='my-2' />
                    <div class="flex gap-2">
                        <a class='btn btn-ghost text-2xl bi-envelope-fill' href='mailto:jsynkk@gmail.com' target='_blank'
                            aria-label="mail"></a>
                        <a class='btn btn-ghost text-2xl bi-linkedin'
                            href='https://www.linkedin.com/in/jorge-guerra-61804516' target='_blank'
                            aria-label="linkedIn"></a>
                        <a class='btn btn-ghost text-2xl bi-github' href='https://github.com/Jsynk' target='_blank'
                            aria-label="github"></a>
                        <a class='btn btn-ghost text-2xl bi-youtube' href='https://www.youtube.com/@jsynk' target='_blank'
                            aria-label="youtube"></a>
                    </div>
            </div>
        </div>
    </div>
</div></template>