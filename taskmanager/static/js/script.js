document.addEventListener('DOMContentLoaded', function () {
    // sidebar nav
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, options);

    // datepicker initialization
    let datepicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
       i18n: {done: "Select"};

    // select dropdown
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);
  });
});