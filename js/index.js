$(function () {

    $('#footer').load('../../common/footer.html')
    let path = window.location.pathname.replace("index.html", "").split('/').filter(Boolean)
    
    if (path.length === 0) path.push('home')

    $("#primaryNav").load("../../common/primaryNav.html", () => {
        let path = window.location.pathname.replace("index.html", "").split('/').filter(Boolean)
        $(`#nav-link-${path[0]}`).addClass('active')
    })

    path = path.join('/')
    $("#secondaryNav").load(`../../${path}/secondaryNav.html`)
    $("#brandingOther").html('<img src="../../images/personnelbranding.jpg" style="height:81px" />')
    $('#content').load(`../../${path}/content.html`)
    $('#primaryNav').on('click', '.nav-link', function (event) {
        let href = $(this).attr('href').split('/').filter(Boolean)[0]
        if (href === path) event.preventDefault()
    })
})