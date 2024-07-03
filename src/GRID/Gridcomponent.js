import React,  {Component} from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';
 
class Gridcomponent extends Component {
    render() {
        const { columnCount, spacing, width, height, children } = this.props;

        const GridContainer = styled(Grid)({
            width: width,
            height: height,
            display: 'flex',
            flexWrap: 'wrap'
        });

        const GridItem = styled(Grid)(({ theme }) => ({
            flexBasis: `calc(100% / ${columnCount} - ${spacing * 2}px)`,
            margin: spacing,
            boxSizing: 'border-box',
        }));

        return (
            <GridContainer container>
                {React.Children.map(children, (child) => (
                    <GridItem item>
                        {child}
                    </GridItem>
                ))}
            </GridContainer>
        );
    }
}


Gridcomponent.propTypes = {
    columnCount: PropTypes.number,
    spacing: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.node,
};

Gridcomponent.defaultProps = {
    columnCount: 3,
    spacing: 8,
    width: '100%',
    height: '100%',
};

export default Gridcomponent;