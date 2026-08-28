pub mod strings {
    pub const AKU: &str = "惡";
    pub const GH_USERNAME: &str = "themosthigh";
    pub const GH_BIO: &str = "The struggle for justice is an ongoing and necessary pursuit that should prevail over laws and institutions.";
    pub const GH_URL: &str = "https://github.com/themosthigh";
}

pub mod projects {
    struct Project {
        name: &'static str,
        description: &'static str,
        github_url: &'static str,
    }

    pub fn get_projects() -> Vec<Project> {
        vec![
            Project {
                name: "My Personal Website",
                description: "A simple static website written in Rust using the Leptos framework.",
                github_url: "https://github.com/themosthigh/themosthigh.github.io",
            },
            Project {
                name: "DIN",
                description: "A quran reader app",
                github_url: "https://github.com/themosthigh/din_dt",
            },
        ]
    }
}
