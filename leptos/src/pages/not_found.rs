use leptos::prelude::*;

#[component]
pub fn NotFound() -> impl IntoView {
    view! {
        <div class="flex flex-col items-center justify-center h-full p-4">
            <h1 class="text-4xl font-thin">404 | Not Found</h1>
        </div>
    }
}
