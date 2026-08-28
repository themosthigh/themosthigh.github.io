use leptos::prelude::*;

use crate::constants::strings;

#[component]
pub fn Footer() -> impl IntoView {
    view! {
        <footer class="px-8 py-4">
            <div class="flex flex-col gap-4 justify-start max-w-7xl mx-auto">
                <span class="text-sm opacity-50">{strings::GH_BIO}</span>
            </div>
        </footer>
    }
}
