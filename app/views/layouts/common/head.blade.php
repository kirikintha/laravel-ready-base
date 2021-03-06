<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{{ isset($pageDescription) ? $pageDescription : '' }}}">
    <meta name="author" content="{{{ isset($pageAuthor) ? $pageAuthor : '' }}}">
    @yield('meta')
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">

    <title>AWS Billing Reports{{{ isset($pageTitle) ? ' - ' . $pageTitle : '' }}}</title>

    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/styles.css" rel="stylesheet">
    @yield('styles')

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>