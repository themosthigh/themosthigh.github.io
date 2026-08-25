use leptos::prelude::*;
use leptos_meta::{Stylesheet, provide_meta_context};
use leptos_router::{components::*, path};

use crate::{components, pages};

#[component]
pub fn App() -> impl IntoView {
    provide_meta_context();

    view! {
        <Stylesheet id="leptos" href="/style/output.css" />

        <div class="flex flex-col min-h-screen">
            <Router>
                // Top navigation bar
                <components::nav::MainNavigationBar />

                // Main content
                <main>
                    <Routes fallback=pages::not_found::NotFound>
                        <Route path=path!("/") view=pages::home::HomePage />
                    </Routes>
                </main>
            </Router>
        </div>
    }
}
