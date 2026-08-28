use leptos::prelude::*;
use leptos_meta::{provide_meta_context, Stylesheet};
use leptos_router::{components::*, path};

use crate::{components, pages};

#[component]
pub fn App() -> impl IntoView {
    provide_meta_context();

    view! {
        <Stylesheet id="leptos" href="/style/output.css" />

        <div class="flex flex-col min-h-screen bg-black text-white">
            <Router>
                // Top navigation bar
                <components::nav::MainNavigationBar />

                // Main content
                <main class="flex flex-col flex-1">
                    <Routes fallback=pages::not_found::NotFound>
                        <Route path=path!("/") view=pages::home::HomePage />
                        <Route path=path!("/blog") view=pages::blog::BlogPage />
                        <Route path=path!("/projects") view=pages::projects::ProjectsPage />
                    </Routes>
                </main>

                // Footer content
                <components::footer::Footer />
            </Router>
        </div>
    }
}
