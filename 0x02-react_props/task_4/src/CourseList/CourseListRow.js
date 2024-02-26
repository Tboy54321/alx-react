import React from "react";
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    if (textSecondCell === null) {
        return <tr>
            <th colSpan="2">{textFirstCell}</th>
        </tr>
    }
    else if (textSecondCell) {
        <tr>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
        </tr>
    }
    else if (!isHeader) {
        <tr>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </tr>
    }
}

export default CourseListRow;