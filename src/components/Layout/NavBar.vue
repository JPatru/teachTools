<template>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4">TeachTools</div>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">


                <div class="navbar-end">
                    <RouterLink  
                        to="/"
                        class="navbar-item"
                        active-class="is-active"
                    >
                        Tools
                    </RouterLink>
                    <RouterLink  
                        to="/match"
                        class="navbar-item"
                        active-class="is-active"
                    >
                        Match
                    </RouterLink>
                </div>
            </div>
        </div>

    </nav>
</template>