use leptos::prelude::*;

use crate::strings;

#[component]
pub fn HomePage() -> impl IntoView {
    view! {
        <div class="px-8 py-16 bg-red-700">
            <div class="max-w-7xl mx-auto ">
                <div class="font-bold grid gap-2  font-mono">
                    <h3 class="uppercase">goto;</h3>
                    <h1 class="text-[calc(min(9rem,10vw))]">
                        {strings::AKU}_{strings::GH_USERNAME}
                    </h1>
                    <h3 class="uppercase">to see more brainmade-made work</h3>
                </div>
            </div>
        </div>
    }
}
