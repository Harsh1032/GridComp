import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

class Gridcomponent extends Component {
    render() {
        const { columnCount, spacing, width, height, children } = this.props;

        //this is representing columncount which is an array of rows and columns
        const [rows, columns] = columnCount;
        const totalCells = rows * columns;

        const GridContainer = styled(Grid)({
            width: width,
            height: height,
            display: 'flex',
            flexWrap: 'wrap'
        });

        const GridItem = styled(Grid)(({ theme }) => ({
            flexBasis: `calc(100% / ${columns} - ${spacing * 2}px)`,
            margin: spacing,
            boxSizing: 'border-box',
        }));

        return (
            <GridContainer container>
                {React.Children.map(children, (child, index) => (
                    <GridItem item key={index}>
                        {child}
                    </GridItem>
                )).slice(0, totalCells)}
            </GridContainer>
        );
    }
}

Gridcomponent.propTypes = {
    columnCount: PropTypes.arrayOf(PropTypes.number).isRequired,
    spacing: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.node,
};

Gridcomponent.defaultProps = {
    columnCount: [3, 3],
    spacing: 8,
    width: '100%',
    height: '100%',
};

export default Gridcomponent;
