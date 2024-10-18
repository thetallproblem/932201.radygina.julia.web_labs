function get_static(main_col, hid_col) {
        main_col.style.width='50%';
        hid_col.style.width='50%';

        img1 = document.getElementById('img_1');
        img2 = document.getElementById('img_2');

        img1.style.width='100%';
        img1.style.objectFit='fill';
        img2.style.width='100%';
        img2.style.objectFit='fill';
}

function open_img(id_img, id_main_col, id_hid_col) {
    main_col = document.getElementById(id_main_col);
    hid_col = document.getElementById(id_hid_col);

    get_static(main_col, hid_col);

    if (id_img != '') {
        img = document.getElementById(id_img);
        main_col.style.width='96%';
        hid_col.style.width='4%';
        
        img.style.width='auto';
        img.style.objectFit='cover';
    }
    
}