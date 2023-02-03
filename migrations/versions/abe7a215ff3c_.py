"""empty message

Revision ID: abe7a215ff3c
Revises: 28223afa4459
Create Date: 2023-02-03 23:17:39.614666

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'abe7a215ff3c'
down_revision = '28223afa4459'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cart',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('costumer_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['costumer_id'], ['costumer.id'], ),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('order__item', sa.Column('quantity', sa.Integer(), nullable=False))
    op.add_column('order__item', sa.Column('price', sa.Integer(), nullable=False))
    op.drop_column('order__item', 'username')
    op.drop_column('order__item', 'address')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('order__item', sa.Column('address', sa.INTEGER(), autoincrement=False, nullable=False))
    op.add_column('order__item', sa.Column('username', sa.INTEGER(), autoincrement=False, nullable=False))
    op.drop_column('order__item', 'price')
    op.drop_column('order__item', 'quantity')
    op.drop_table('cart')
    # ### end Alembic commands ###
