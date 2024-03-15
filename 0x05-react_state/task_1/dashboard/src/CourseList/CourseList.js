import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";


function CourseList({ listCourses }) {
    return (
        <table id="CourseList" className={css(styles.table)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true}/>
                <CourseListRow textFirstCell="Course name" textSecondCell="credit" isHeader={true}/>
            </thead>
            <tbody>
                {listCourses.length > 0 ? (
                    listCourses.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
                ) : (
                    <CourseListRow textFirstCell="No course available yet" />
                )}
            </tbody>
        </table>
    )
};

const styles = StyleSheet.create({
    table: {
        marginTop: "2em",
        width: "100%",
        border: "1px solid #ddd",
        fontSize: "1.2rem",
        marginBottom: "15em"
    },
    th: {
        borderBottom: "1px solid #ddd"
    },
    thTd: {
        width: '80%',
    },
    tableCenter: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    trNthChild: {
        textAlign: 'left',
    },

})

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
}

CourseList.defaultProps = {
    listCourses: [],
}

export default CourseList;