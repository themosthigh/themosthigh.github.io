use leptos::prelude::*;

use crate::strings;

#[component]
pub fn Footer() -> impl IntoView {
    view! {
        <footer class="px-8 py-4">
            <div class="flex flex-col gap-4 justify-start max-w-7xl mx-auto">
                <h1 class="text-4xl md:text-6xl font-bold text-[calc(min(10rem,10vw))]">
                    {strings::GH_USERNAME}
                </h1>
                <span class="text-sm opacity-50">{strings::GH_BIO}</span>
            </div>
        </footer>
    }
}
