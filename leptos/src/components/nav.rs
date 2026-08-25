use leptos::prelude::*;

#[component]
pub fn MainNavigationBar() -> impl IntoView {
    view! {
        <nav class="bg-purple-50 text-purple-800 px-4 py-2 gap-4 flex justify-center items-center">
            <MainNavItem name="Home" href="/" />
            <MainNavItem name="Blog" href="/blog" />
            <MainNavItem name="Projects" href="/projects" />
        </nav>
    }
}

#[component]
pub fn MainNavItem<'a, 'b>(name: &'a str, href: &'b str) -> impl IntoView {
    view! {
        <a class="text-purple-800 hover:text-purple-600 hover:underline" href=href>
            {name}
        </a>
    }
}
