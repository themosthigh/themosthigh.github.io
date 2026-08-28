use leptos::prelude::*;

use crate::strings;

#[component]
pub fn MainNavigationBar() -> impl IntoView {
    view! {
        <nav class="py-4 px-8 h-[4rem] gap-4 sticky top-0 bg-black/90 backdrop-blur-xl">

            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <a href="/" class="flex gap-2 items-center">
                    <span class="text-2xl">{strings::AKU}</span>
                    <span class="text-sm">{strings::GH_USERNAME}</span>
                </a>

                <div class="flex items-center gap-6">
                    <MainNavItem name="Home" href="/" />
                    <MainNavItem name="Blog" href="/blog" />
                    <MainNavItem name="Projects" href="/projects" />
                </div>
            </div>
        </nav>
    }
}

#[component]
pub fn MainNavItem<'a, 'b>(name: &'a str, href: &'b str) -> impl IntoView {
    view! {
        <a class="text-white/80 hover:underline text-xs uppercase" href=href>
            {name}
        </a>
    }
}
