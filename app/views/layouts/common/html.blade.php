<!DOCTYPE html>
<html lang="en">
    @include('layouts.common.head')

    <body>

        @include('layouts.common.navbar')

        <div class="container">

            @yield('content')

        </div><!-- /.container -->
        
        @include('layouts.common.foot')
    </body>
</html>
