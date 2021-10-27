import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  GetCarouselSearchShowTime,
  GetDetailShowTime,
} from "../../../../redux/actions/ManagerTheaterAction/DetailAction";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import formatDate from "../../../../util/fomatDate";
import { useHistory } from "react-router";

function SearchBarCarousel() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { arrMovie } = useSelector((state) => state.MovieListReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const { arrCumRapData, renderArrCumRapData } = useSelector(
    (state) => state.DetailReducer
  );

  const [data, setData] = useState({
    //handleSelectMovie
    setMovie: "",
    //handleSelectTheater
    setTheater: "",
    ngayChieuRender: [],
    lichChieuPhimData: [],
    //handleSelectNgayXem
    setNgayXem: "",
    suatChieuRender: [],
    lichChieuPhimDataSelected: [],
    //handleSelectSuatChieu
    setSuatChieu: "",
    maLichChieu: "",
    open: { movie: false, theater: false, ngayXem: false, suatChieu: false },
    rootElementPopup: null,
  });
  const [topPopup, setTopPopup] = useState(false);

  const classes = useStyles({
    openPhim: data.open.movie || data.setMovie?.maPhim,
    isDesktop,
  });
  useEffect(() => {
    if (!data.open.movie) {
      return undefined;
    }
    setTimeout(() => {
      const placementPopup = document.querySelector(
        'div[role="presentation"].MuiAutocomplete-popper'
      );
      if (placementPopup.getAttribute("x-placement") === "bottom") {
        setTopPopup(false);
      } else if (placementPopup.getAttribute("x-placement") === "top") {
        setTopPopup(true);
      }
    }, 50);
  }, [data.open.movie]);
  const handleOpenMovie = () => {
    setData((data) => ({ ...data, open: { ...data.open, movie: true } }));
  };
  const handleOpenTheater = () => {
    setData((data) => ({ ...data, open: { ...data.open, theater: true } }));
  };
  const handleOpenNgayXem = () => {
    setData((data) => ({ ...data, open: { ...data.open, ngayXem: true } }));
  };
  const handleOpenSuatChieu = () => {
    setData((data) => ({ ...data, open: { ...data.open, suatChieu: true } }));
  };
  const handleCloseMovie = () => {
    setData((data) => ({
      ...data,
      open: { ...data.open, movie: false },
    }));
  };
  const handleCloseTheater = () => {
    setData((data) => ({
      ...data,
      open: { ...data.open, theater: false },
    }));
  };
  const handleCloseNgayXem = () => {
    setData((data) => ({
      ...data,
      open: { ...data.open, ngayXem: false },
    }));
  };
  const handleCloseSuatChieu = () => {
    setData((data) => ({
      ...data,
      open: { ...data.open, suatChieu: false },
    }));
  };
  const handleSelectMovie = async (movie) => {
    if (!movie) {
      return;
    }
    setData((data) => ({
      ...data,
      setMovie: movie,

      open: { ...data.open, theater: true },
    }));

    dispatch(GetCarouselSearchShowTime(movie.maPhim));
  };
  const handleSelectTheater = (event) => {
    const indexSelect = arrCumRapData?.findIndex(
      (item) => item.tenCumRap === event.target.value
    );
    const lichChieuPhimData = arrCumRapData[indexSelect].lichChieuPhim;
    const ngayChieuPhimRender = lichChieuPhimData?.map((item, index) => {
      return item.ngayChieuGioChieu.slice(0, 10); // tạo mảng mới với item là "2020-12-17" cắt ra từ 2020-12-17T10:10:00
    });
    const ngayChieuRenderRemoveDuplicates = [...new Set(ngayChieuPhimRender)]; // xóa đi phần tử trùng lặp để hiển thị

    setData((data) => ({
      ...data,
      setTheater: event.target.value,
      ngayChieuRender: ngayChieuRenderRemoveDuplicates,
      lichChieuPhimData,
      open: { ...data.open, ngayXem: true },
    }));
  };
  const handleSelectNgayXem = (event) => {
    const lichChieuPhimDataSelected = data.lichChieuPhimData.filter((item) => {
      if (item.ngayChieuGioChieu.slice(0, 10) === event.target.value) {
        return true;
      }
      return false;
    });

    const suatChieuRender = lichChieuPhimDataSelected?.map((item) => {
      return item.ngayChieuGioChieu.slice(11, 16);
    });
    setData((data) => ({
      ...data,
      setNgayXem: event.target.value,
      suatChieuRender,
      lichChieuPhimDataSelected,
      open: { ...data.open, suatChieu: true },
    }));
  };
  const handleSelectSuatChieu = (event) => {
    const indexLichChieuPhimDataSelected =
      data.lichChieuPhimDataSelected.findIndex(
        (item) => item.ngayChieuGioChieu.slice(11, 16) === event.target.value
      );
    const maLichChieu =
      data.lichChieuPhimDataSelected[indexLichChieuPhimDataSelected]
        .maLichChieu;

    setData((data) => ({
      ...data,
      setSuatChieu: event.target.value,
      maLichChieu,
    }));
  };
  const Menu = {
    // props và class của menu(Popover)
    classes: { paper: classes.menu },
    getContentAnchorEl: null, // không có dòng này popup "đang tìm rạp" bị set ở vị trí chính giữa
    anchorOrigin: {
      vertical: topPopup ? "top" : "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: topPopup ? "bottom" : "top",
      horizontal: "left",
    },
  };
  return (
    <div className={classes.root}>
      <FormControl focused={false} className={classes.itemFirst}>
        <Autocomplete
          getOptionLabel={(option) => option.tenPhim}
          options={arrMovie}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              className={classes.textField}
              {...params}
              label="Movie"
            />
          )}
          value={data.setMovie ? data.setMovie : null} // có thể không quan trọng
          popupIcon={<ExpandMoreIcon />}
          onChange={(event, movie) => handleSelectMovie(movie)}
          open={data.open.movie}
          onOpen={handleOpenMovie}
          onClose={handleCloseMovie}
          blurOnSelect
          noOptionsText="Không tìm thấy"
          classes={{
            popupIndicator: classes.popupIndicator,
            option: classes.menu__item,
            listbox: classes.listbox,
            paper: classes.paper,
            noOptions: classes.noOptions,
          }}
        />
      </FormControl>
      {/* Rap */}
      <FormControl className={classes.search__item}>
        <Select
          value={data.setTheater} // tenCumRap
          renderValue={(value) => `${value ? value : "Rạp"}`} // hiển thị giá trị đã chọn
          onChange={handleSelectTheater}
          open={data.open.theater}
          onOpen={handleOpenTheater}
          onClose={handleCloseTheater}
          displayEmpty
          IconComponent={ExpandMoreIcon}
          MenuProps={Menu}
        >
          <MenuItem
            value=""
            style={{
              display: renderArrCumRapData?.length > 0 ? "none" : "block",
            }}
            classes={{
              root: classes.menu__item,
              selected: classes["menu__item--selected"],
            }}
          >
            Vui lòng chọn phim
          </MenuItem>
          {renderArrCumRapData?.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.search__item}>
        <Select
          onChange={handleSelectNgayXem}
          value={data.setNgayXem} // ngayChieu
          renderValue={(value) => `${value ? value : "Ngày xem"}`}
          displayEmpty
          IconComponent={ExpandMoreIcon}
          open={data.open.ngayXem}
          onOpen={handleOpenNgayXem}
          onClose={handleCloseNgayXem}
          MenuProps={Menu}
        >
          <MenuItem
            value=""
            style={{
              display: data.ngayChieuRender?.length > 0 ? "none" : "block",
            }}
            classes={{
              root: classes.menu__item,
              selected: classes["menu__item--selected"],
            }}
          >
            Vui lòng chọn phim và rạp
          </MenuItem>
          {data.ngayChieuRender?.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                <div className="pr-2">{formatDate(item).dayToday}</div>
                <div>{formatDate(item).dateShort}</div>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.search__item}>
        <Select
          value={data.setSuatChieu}
          displayEmpty
          renderValue={(value) => `${value ? value : "Suất chiếu"}`}
          onChange={handleSelectSuatChieu}
          open={data.open.suatChieu}
          onOpen={handleOpenSuatChieu}
          onClose={handleCloseSuatChieu}
          IconComponent={ExpandMoreIcon}
          MenuProps={Menu}
        >
          <MenuItem
            value=""
            style={{
              display: data.suatChieuRender?.length > 0 ? "none" : "block",
            }}
            classes={{
              root: classes.menu__item,
              selected: classes["menu__item--selected"],
            }}
          >
            Vui lòng chọn phim và rạp, ngày xem
          </MenuItem>
          {data.suatChieuRender.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl className={classes.search__item}>
        <Button
          classes={{
            root: classes.btn,
            disabled: classes.btnDisabled,
          }}
          disabled={!data.maLichChieu}
          onClick={() => history.push(`/datve/${data.maLichChieu}`)}
        >
          MUA VÉ NGAY
        </Button>
      </FormControl>
    </div>
  );
}

export default SearchBarCarousel;
