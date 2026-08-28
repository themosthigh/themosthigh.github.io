use leptos::prelude::*;

use crate::constants::strings;

#[component]
pub fn HomePage() -> impl IntoView {
    view! {
        <a
            class="bg-red-700 hover:bg-red-800 transition-all group"
            href=strings::GH_URL
            target="_blank"
        >
            <div class="me-auto bg-yellow-100 h-4 group-hover:w-full w-0 duration-300 delay-200"></div>

            <div class="max-w-7xl mx-auto px-8 py-16 ">
                <div class="font-bold grid gap-2  font-mono">
                    <h3 class="uppercase">goto;</h3>
                    <h1 class="text-[calc(min(9rem,10vw))] text-yellow-100">
                        {strings::AKU}_{strings::GH_USERNAME}
                    </h1>
                    <h3 class="uppercase text-white">to see more brainmade-made work</h3>
                </div>
            </div>

            <div class="ms-auto bg-yellow-100 h-4 group-hover:w-full w-0 transition-all duration-300 delay-300"></div>
        </a>
    }
}
