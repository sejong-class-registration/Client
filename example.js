const returnSticker = (day, startTime) => {
  for (var i = 0; i < userScheduleData.length; i++) {
    // console.log(userScheduleData[i]);

    var color = null;
    if (userScheduleData[i].classification === "전필") {
      color = "#ff9999";
    }
    if (userScheduleData[i].classification === "전선") {
      color = "#ffcccc";
    }
    if (userScheduleData[i].classification === "교필") {
      color = "#d7df7e";
    }
    if (userScheduleData[i].classification === "공필") {
      color = "#917edf";
    }
    if (userScheduleData[i].classification === "교선") {
      color = "#99ff99";
    }
    if (userScheduleData[i].classification === "교직") {
      color = "#99ff99";
    }
    if (
      userScheduleData[i].classification === "기교" ||
      userScheduleData[i].classification === "기필"
    ) {
      color = "#cc99ff";
    }

    // console.log(userScheduleData[i].time);
    // console.log(userScheduleData[i].time.day.includes("화"));

    // 정각
    if (
      userScheduleData[i].time.day.includes(day) &&
      userScheduleData[i].time.startTime === startTime
    ) {
      // console.log(userScheduleData[i]);

      const selectedLecInfo = {
        classification: userScheduleData[i].classification,
        credit: userScheduleData[i].credit,
        dayAndTime: userScheduleData[i].dayAndTime,
        department: userScheduleData[i].department,
        distrib: userScheduleData[i].distrib,
        english: userScheduleData[i].english,
        lectureGrade: userScheduleData[i].lectureGrade,
        lectureId: userScheduleData[i].lectureId,
        name: userScheduleData[i].name,
        notice: userScheduleData[i].notice,
        profName: userScheduleData[i].profName,
        recommend: userScheduleData[i].recommend,
        room: userScheduleData[i].room,
        id: userScheduleData[i].id,
      };

      const onClickHandler = () => {
        dispatch(
          selectedLecActions.changeSelectedLec({
            selectedLec: selectedLecInfo,
          })
        );
        setIsOpen(true);
      };
      const timeLength =
        userScheduleData[i].time.endTime - userScheduleData[i].time.startTime;
      const className = "sticker h" + timeLength;
      const classNameContent = className + "-content";
      // console.log(className);

      console.log(userScheduleData[i]);

      return (
        <div
          className={className}
          style={{
            backgroundColor: color,
          }}
          onClick={onClickHandler}
        >
          <div className={classNameContent}>{userScheduleData[i].name}</div>
        </div>
      );
    }
    // 정각 + 30분 시작
    if (
      userScheduleData[i].time.day.includes(day) &&
      userScheduleData[i].time.startTime === startTime + 30
    ) {
      const selectedLecInfo = {
        classification: userScheduleData[i].classification,
        credit: userScheduleData[i].credit,
        dayAndTime: userScheduleData[i].dayAndTime,
        department: userScheduleData[i].department,
        distrib: userScheduleData[i].distrib,
        english: userScheduleData[i].english,
        lectureGrade: userScheduleData[i].lectureGrade,
        lectureId: userScheduleData[i].lectureId,
        name: userScheduleData[i].name,
        notice: userScheduleData[i].notice,
        profName: userScheduleData[i].profName,
        recommend: userScheduleData[i].recommend,
        room: userScheduleData[i].room,
        id: userScheduleData[i].id,
      };

      const onClickHandler = () => {
        dispatch(
          selectedLecActions.changeSelectedLec({
            selectedLec: selectedLecInfo,
          })
        );
        setIsOpen(true);
      };
      const timeLength =
        userScheduleData[i].time.endTime - userScheduleData[i].time.startTime;
      const className = "sticker h" + timeLength + "-half";
      const classNameContent = className + "-content";
      // console.log(className);
      return (
        <div
          className={className}
          style={{
            backgroundColor: color,
          }}
          onClick={onClickHandler}
        >
          <div className={classNameContent}>{userScheduleData[i].name}</div>
        </div>
      );
    }
  }
};